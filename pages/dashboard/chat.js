import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  HStack,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import Layout from "./layout";

import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import ChartBox from "./ChatBox";
import { UserRoleContext } from "../../public/context/user.context";
import { useAppContext } from "../../public/context/app.context.tsx";

import {
  getAllBusiness,
  getAllConsultants,
  getAllPartners,
} from "../../public/services/network";
import { usePubNub } from "pubnub-react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Chat = () => {
  const [business, setBusiness] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [partners, setPartners] = useState([]);
  const [filteredMessages, setFiltered] = useState([]);
  const [user, setUser] = useState({});
  const { userId } = useContext(UserRoleContext);
  const [selectedUser, setSelectedUser] = useState({});

  const { id } = useAppContext();

  const pubnub = usePubNub();

  const [channels, setChannel] = useState(['awesome-channel']);
  const [messages, addMessage] = useState([]);
  const [message, setMessage] = useState('');

  const handleMessage = async event => {
    const message = event.message;
    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      const res = await AsyncStorage.getItem('currentUser');
      const resJson = JSON.parse(res);
      const msg = { text, id: resJson._id }
      addMessage(messages => [...messages, msg]);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await AsyncStorage.getItem('currentUser');
      const resJson = JSON.parse(res);

      setUser(resJson._id);
    })()
  }, [])

  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels });
    getAllMessages();
  }, [pubnub, channels]);

  const sendMessage = message => {
    if (message) {
      pubnub
        .publish({ channel: channels[0], message })
        .then(() => setMessage(''));
    }
  };

  const getAllMessages = () => {
    const res = messages.filter(el => messages.indexOf(el) === messages.lastIndexOf(el));
    setFiltered(res)
  }


  useEffect(() => {
    (async () => {
      const res_business = await getAllBusiness();
      setBusiness(res_business);

      const res_consultant = await getAllConsultants();
      setConsultants(res_consultant);

      const res_partners = await getAllPartners();
      setPartners(res_partners);
    })();
  }, []);

  useEffect(() => {
    if(Object.keys(selectedUser).length){
      // const data = [`${user}-${selectedUser._id}`]
      // setChannel(data)
    }
  }, [selectedUser])

  return (
    <Layout active="Chat">
      <HStack
        w="100%"
        h={"fit-content"}
        align="flex-start"
        mt={10}
        justify="center"
        spacing={0}
      >
        <VStack w="25%">
          <Box
            justifyContent={"center"}
            alignItems="center"
            display={"flex"}
            height="88px"
            width="100%"
            paddingLeft={"20px"}
            paddingRight={"20px"}
            backgroundColor="#fff"
            border="1px solid #DFE6E9"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
              >
                 <BsSearch />
              </InputLeftElement>
              <Input placeholder="Search" height={"50px"} />
            </InputGroup>
          </Box>

          <VStack width="100%" spacing={0}>
            <Tabs width="100%" marginTop={-15}>
              <TabList backgroundColor="#fff">
                <Tab
                  _selected={{ borderBottom: "2px solid #08A730" }}
                  fontSize={"11px"}
                >
                  Businesses
                </Tab>
                <Tab
                  _selected={{ borderBottom: "2px solid #08A730" }}
                  fontSize={"11px"}
                >
                  Consultants
                </Tab>
                <Tab
                  _selected={{ borderBottom: "2px solid #08A730" }}
                  fontSize={"11px"}
                >
                  Partners
                </Tab>
              </TabList>

              <TabPanels width="130%">
                <TabPanel width="100%" marginTop={"-20px"}>
                  {business.map((elememt) => (
                    <ChartBox
                      onClick={() => setSelectedUser(elememt)}
                      full_name={elememt.full_name}
                      _id={elememt._id}
                      key={element._id}
                      email={elememt.email}
                    />
                  ))}
                </TabPanel>
                <TabPanel width="100%" marginTop={"-20px"}>
                  {consultants.map((elememt) => (
                    <ChartBox
                      onClick={() => setSelectedUser(elememt)}
                      full_name={elememt.username}
                      _id={elememt._id}
                      key={element._id}
                      email={elememt.email}
                    />
                  ))}
                </TabPanel>
                <TabPanel width="100%" marginTop={"-20px"}>
                  {partners.map((elememt) => (
                    <ChartBox
                      onClick={() => setSelectedUser(elememt)}
                      key={element._id}
                      full_name={elememt.full_name}
                      _id={elememt._id}
                      email={elememt.email}
                    />
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </VStack>
        <VStack width={"75%"}>
          <HStack
            border="1px solid #DFE6E9"
            justify="space-between"
            paddingLeft={"30px"}
            paddingRight={"30px"}
            align="center"
            w="100%"
            height="88px"
            backgroundColor="#fff"
          >
            <Text fontWeight={500} fontSize={"28px"} fontFamily="Manrope">
              Communication Logs
            </Text>
            <HStack>
              {
                !Boolean(Object.keys(selectedUser).length)
                  ?
                  <>
                    <Image
                      src="/imgs/svgs/profile.svg"
                      height={"40px"}
                      width={"40px"}
                    />
                    <Image src="/imgs/svgs/star.svg" height={"30px"} width={"30px"} />
                  </>
                  :
                  <Text>
                    { selectedUser?.full_name || selectedUser?.username }
                  </Text>
              }
            </HStack>
          </HStack>
          <VStack
            padding={"20px"}
            width="100%"
            justify={"space-between"}
            align="flex-start"
          >
            {messages?.map((data, i) => (
              <VStack
                padding={"15px"}
                key={i}
                alignSelf={"flex-end"}
                backgroundColor={i % 2 !== 0 ? "#08A730" : "#fff"}
                borderRadius={10}
                color={user === data.id ? "#636E72" : "#000"}
                width={"304px"}
                boxShadow="0px 10px 20px rgba(0, 0, 0, 0.08)"
                justify="center"
                align="center"
              >
                <Text fontSize={"14px"} fontFamily="Manrope" fontWeight={400}>
                  {data.text}
                </Text>
              </VStack>
            ))}
            <Box position='fixed' bottom='20px' width='55%'>
              <HStack spacing="15px" justify="space-between" width="100%">
                <Input
                  backgroundColor="#fff"
                  borderRadius="7px"
                  height="40px"
                  border="1px solid #DFE6E9"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                />
                <Button
                  backgroundColor="#08A730"
                  height="40px"
                  width="83px"
                  color="#fff"
                  fontWeight={400}
                  onClick={() => sendMessage(message)}
                >
                  Send
                </Button>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </HStack>
    </Layout>
  );
};

export default Chat;

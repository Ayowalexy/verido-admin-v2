import { Box, Flex, Text, useTheme, Icon, HStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Card from "../card";
import BusinessOwnners from "../../../pages/dashboard/chats/business_owners";
import ConsultantChart from "../../../pages/dashboard/chats/consultant";
import Active from "../../../pages/dashboard/chats/active";
import Downlinks from "../../../pages/dashboard/chats/downlinks";
import { formatNumber } from "../../utils/formatter";

type dataProps = {
  data: object | any;
};

const Box_1 = ({ data }: dataProps) => {
  const theme = useTheme();
  const {
    colors: {
      brand: { black, white, yoda },
    },
  } = theme;
  const {
    colors: {
      chart: { monthly, quarterly, yearly },
    },
  } = theme;

  return (
    <Flex gap={10}>
      <Flex width="70%" flexWrap="wrap" flexDir="column" gap={10}>
        <Flex gap={10} mt={7}>
          <Card number={data?.no_of_business} card_type="Business Owners">
            <BusinessOwnners />
          </Card>
          <Card number={data?.no_of_consultants} card_type="Consultants">
            <ConsultantChart />
          </Card>
          <Card
            number={data?.no_of_subscribers?.no_of_subscribed}
            card_type="Active Subscribers"
          >
            <Active
              type="subscribers"
              value={(Number(data?.no_of_subscribers?.no_of_subscribed) / 100) || 0}
            />
          </Card>
          <Card number={data?.no_of_consultants} card_type="Partners">
            <Active
              type="consultante"
              value={(Number(data?.no_of_consultants) / 100) || 0}
            />
          </Card>
          
        </Flex>
        <Flex
          flexGrow={1}
          bg={white}
          height={126}
          borderRadius={16}
          justify="space-between"
          align="center"
          pl={4}
          pr={4}
        >
          <Box>
            <Text color={black} fontSize={16} fontWeight={300}>
              Subscriptions
            </Text>
            <Text color={yoda} fontSize={14} fontWeight={300}>
              Total
            </Text>
            <Text color={black} fontSize={20} fontWeight={400}>
              ${formatNumber(data?.amount_subscribed)}
            </Text>
          </Box>
          <Box>
            {[
              { type: "Trials", color: yearly, number: data?.no_of_subscribers?.no_of_trials },
              { type: "Subscribed", color: quarterly, number: data?.no_of_subscribers?.no_of_subscribed },
              { type: "Expired", color: monthly, number: data?.no_of_subscribers?.no_of_expired },
            ].map((element, idx) => (
              <HStack key={idx}>
                <Box
                  width={2}
                  height={2}
                  borderRadius={5}
                  bgColor={element.color}
                />
                <Text color={black} fontSize={12} fontWeight={700}>
                  {element.type} - {element.number}
                </Text>
              </HStack>
            ))}
          </Box>
          <Flex width="50%">
            {[
              {
                type: "Trials",
                color: yearly,
                percentage: data?.no_of_subscribers?.percent_of_trials ? data?.no_of_subscribers?.percent_of_trials + '%' : 0,
                num: data?.no_of_subscribers
              },
              {
                type: "Subscribed",
                color: quarterly,
                percentage: data?.no_of_subscribers?.percent_of_subscribed ? data?.no_of_subscribers?.percent_of_subscribed + '%' : 0,
              },
              {
                type: "Expired",
                color: monthly,
                percentage: data?.no_of_subscribers?.percent_of_expired ? data?.no_of_subscribers?.percent_of_expired + '%' : 0,
              },
            ].map((element, idx) => (
              <Flex
                key={idx}
                justify="center"
                align="center"
                width={`${element.percentage}`}
                height="40px"
                borderTopLeftRadius={idx == 0 ? 20 : 0}
                borderTopRightRadius={idx == 2 ? 20 : 0}
                borderBottomLeftRadius={idx == 0 ? 20 : 0}
                borderBottomRightRadius={idx == 2 ? 20 : 0}
                bgColor={element.color}
              >
                <Text color={white} fontSize={12}>
                  {element.percentage || 0}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Box mt={7} width="30%" bg={white} p={5} borderRadius={16}>
        <Flex flexDir="column">
          <Flex justify="space-between">
            <Text color={black} fontSize={16}>
              Downlinks
            </Text>
            <Icon as={BsThreeDots} />
          </Flex>
          <Downlinks
            total={
              Number(data?.no_of_consultants) + Number(data?.no_of_business)
            }
            value={0.8}
          />
          <Flex justify="space-between" mt={10}>
            <HStack>
              <>
                <Box
                  width={2}
                  height={2}
                  borderRadius={5}
                  bgColor="rgba(8, 167, 48, 1)"
                />
                <Text color={black} fontSize={12}>
                  Business Owners
                </Text>
              </>
            </HStack>
            <HStack>
              <>
                <Box
                  width={2}
                  height={2}
                  borderRadius={5}
                  bgColor="rgba(0, 122, 255, 1)"
                />
                <Text color={black} fontSize={12}>
                  Consultant
                </Text>
              </>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Box_1;

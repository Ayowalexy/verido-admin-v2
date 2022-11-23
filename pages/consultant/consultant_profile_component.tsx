import {
  Flex,
  Box,
  Text,
  useTheme,
  VStack,
  Divider,
  HStack,
  Icon,
} from "@chakra-ui/react";
import VeridoBreadCrump from "../../public/components/breadcrumb";
import Avatar from "../../public/imgs/svgs/avatar.svg";
import CustomButton from "../../public/components/button";
import Read from "../../public/imgs/svgs/read.svg";
import { AiFillStar } from "react-icons/ai";
import BusinessOwnerTable from "../business/business_owner_tables";
import VeridoModal from "../../public/components/modal";
import { useState, useEffect } from "react";
import {
  getOneConsultant,
  suspendConsultant,
  assignPartner,
  deleteConsultant,
} from "../../public/services/network";
import { useRouter } from "next/router";
import PartnerModal from "./partnerModal";
import { getAllPartners } from "../../public/services/network";
import getRole, { getUser } from "../../public/utils/utils";
import ProfileSkeleton from "../../public/components/Skelotons/Profile.Skeleton";

type idProps = {
  id: string | any;
};

const ConsultantProfileComponent = ({ id }: idProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const [modalContent, setModalContent] = useState<any>({});
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isPartnerOpen, setPartnerOpen] = useState(false);
  const [profileData, setProfileData] = useState<any>({});
  const [partners, setPartners] = useState<any>([]);
  const [selected, setSelected] = useState<any>({});

  const handleGetOneConsultants = async () => {
    const res = await getOneConsultant(id);
    setProfileData(res);
    setIsLoading(false);
  };

  const handleSuspend = async () => {
    await suspendConsultant(id);
    router.push("/dashboard/consultant");
  };

  const handleDelete = async () => {
    await deleteConsultant(id);
    router.push("/dashboard/consultant");
  };

  useEffect(() => {
    handleGetOneConsultants();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getAllPartners();
      setPartners(data);
    })();
  }, []);

  const handleAssign = async (admin: string) => {
    try {
      const res = await assignPartner(id, admin);
      if (res) {
        setProfileData(res);
        setPartnerOpen(false)
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box mb={20}>
      <VeridoBreadCrump
        items={[
          { name: "Home", to: "/admin", current: true },
          { name: "Consultants", to: "/consultant", current: true },
          { name: profileData?.username, to: "#", current: false },
        ]}
      />

      {!isLoading ? (
        <>
          <Flex
            width="100%"
            bgColor={theme.colors.brand.white}
            borderRadius={16}
            mt={4}
          >
            <Flex
              flexBasis="23%"
              align="center"
              mt={10}
              justify="space-between"
              flexDir="column"
              borderRight="1px solid rgba(223, 230, 233, 1)"
            >
              <VStack>
                <Avatar />
                <Text fontWeight={300} fontSize={24}>
                  {profileData?.username}
                </Text>
                <Text fontWeight={200} fontSize={14}>
                  {profileData?.email}
                </Text>
                <CustomButton
                  buttonProps={{
                    width: 137,
                    onClick: () => {
                      setAction("delete");
                      setModalContent({
                        title: "Confirm Delete",
                        body: "Please, confirm your deletion of this account. Once delected, all user details and history are lost ",
                      });
                      setIsOpen(true);
                    },
                  }}
                  title="Delete Consultant"
                />
              </VStack>
              <Read />
            </Flex>
            <Box flexBasis="77%" p={5}>
              <Flex width="100%" justify="space-between">
                <VStack align="flex-start" width={400}>
                  <Text fontWeight={400} fontSize={28} textAlign="left">
                    Company’s Informations
                  </Text>
                  <Text textAlign="left" fontWeight={200}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sodales sit amet nunc et vehicula. Mauris sed
                    lectus nisi.
                  </Text>
                </VStack>
                <Box>
                  <CustomButton
                    buttonProps={{
                      width: 137,
                      bgColor: theme.colors.brand.suspend,
                      onClick: () => {
                        setAction("suspend");
                        setModalContent({
                          title: "Confirm Suspend",
                          body: "Please, confirm your suspension of this account. Once suspended, users will be unable to login into their verido account",
                        });
                        setIsOpen(true);
                      },
                    }}
                    title={profileData.suspended ? "Re-activate" : "Suspend"}
                  />
                </Box>
              </Flex>
              <Divider pt={8} orientation="horizontal" />

              <VStack align="flex-start" pt={10}>
                <Text fontWeight={400} fontSize={28} textAlign="left">
                  About
                </Text>
                <Text textAlign="left" fontWeight={200}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus
                  nisi. Suspendisse velit mi, pretium non euismod vitae
                  Suspendisse velit mi, pretium non euismod vitae
                </Text>
              </VStack>
              <Divider pt={8} orientation="horizontal" />
              <Text fontWeight={400} fontSize={28} textAlign="left" pt={8}>
                Contact
              </Text>
              {[
                {
                  title: "Consultant ID",
                  value: profileData?.consultant_id,
                },
                {
                  title: "Email",
                  value: profileData?.email,
                },
                {
                  title: "Phone",
                  value: profileData?.mobile_number,
                },
                {
                  title: "Date Joined",
                  value: new Date(profileData?.createdAt).toLocaleDateString(),
                },
              ].map((element, idx) => (
                <Flex
                  fontWeight={300}
                  fontSize={14}
                  key={idx}
                  gap={10}
                  pt={5}
                  justify="flex-start"
                >
                  <Text width={150}>{element.title}</Text>
                  <Text>{element.value}</Text>
                </Flex>
              ))}
              <Divider pt={8} orientation="horizontal" />
              <Text fontWeight={400} fontSize={28} textAlign="left" pt={8}>
                Status
              </Text>
              {[
                {
                  title: "Status",
                  value: !profileData?.suspended ? "Active" : "Suspended",
                },
                {
                  title: "Rating",
                  value: profileData?.rating?.toString(),
                },
              ].map((element, idx) => (
                <Flex
                  fontWeight={300}
                  fontSize={14}
                  key={idx}
                  gap={10}
                  pt={5}
                  justify="flex-start"
                >
                  <Text width={150}>{element.title}</Text>
                  <Text>
                    {element.title == "Rating" ? (
                      <>
                        {Array(Number(3))
                          .fill(0)
                          .map((_, idx) => (
                            <Icon
                              key={idx}
                              as={AiFillStar}
                              color="rgba(255, 199, 0, 1)"
                            />
                          ))}
                      </>
                    ) : (
                      element.value
                    )}
                  </Text>
                </Flex>
              ))}
              <Divider pt={8} orientation="horizontal" />
              <Text fontWeight={400} fontSize={28} textAlign="left" pt={8}>
                Partner
              </Text>
              <Flex
                fontWeight={300}
                fontSize={14}
                gap={10}
                pt={5}
                justify="flex-start"
              >
                <Text width={150}>Name</Text>
                <Text>{profileData?.partner?.full_name}</Text>
              </Flex>
              <CustomButton
                buttonProps={{
                  width: 137,
                  onClick: () => setPartnerOpen(!isPartnerOpen),
                }}
                title="Assign Partner"
              />
              <PartnerModal
                isOpen={isPartnerOpen}
                setIsOpen={setPartnerOpen}
                onClick={() => handleAssign(selected._id)}
                >
                {partners.map((element: any) => (
                  <VStack
                  padding={'10px'}
                    onClick={() => setSelected(element)}
                    spacing="0px"
                    paddingBottom="5px"
                    border={element._id === selected._id ? "1px solid rgba(0,0,0,0.4)": '"0px solid rgba(0,0,0,0.4)"'}
                    align="flex-start"
                    key={element._id}
                  >
                    <Text>{element.full_name}</Text>
                    <Text fontSize={"13px"}>{element.email}</Text>
                  </VStack>
                ))}
              </PartnerModal>
            </Box>
          </Flex>

          <BusinessOwnerTable showExport={false} data={profileData.business} />
        </>
      ) : (
        <ProfileSkeleton />
      )}

      <VeridoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
        setAction={setAction}
        onClick={() => {
          if (action == "suspend") {
            handleSuspend();
            setIsOpen(false);
          } else {
            handleDelete();
          }
        }}
      />
    </Box>
  );
};

export default ConsultantProfileComponent;

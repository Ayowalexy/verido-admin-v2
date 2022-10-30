import { Flex, Box, Text, useTheme, VStack, Divider } from "@chakra-ui/react";
import VeridoBreadCrump from "../../public/components/breadcrumb";
import Avatar from "../../public/imgs/svgs/avatar.svg";
import CustomButton from "../../public/components/button";
import Read from "../../public/imgs/svgs/read.svg";
import Box_6 from "../../public/components/Box/Box_6";
import Box_7 from "../../public/components/Box/Box_7";
import Box_8 from "../../public/components/Box/Box_8";
import VeridoModal from "../../public/components/modal";
import { useState, useEffect } from "react";
import BusinessOwnerConsultant from "./business_owner_consultant";
import ProfileSkeleton from "../../public/components/Skelotons/Profile.Skeleton";
import {
  getOneBusiness,
  deleteOneBusiness,
  suspendBusiness,
} from "../../public/services/network";
import { Router, useRouter } from "next/router";
import FormModal from "../../public/components/formModal";
import SubModal from "../../public/components/subModal";
import { businessProps, subProps } from "../../public/components/types";
import { useContext } from "react";
import { UserRoleContext } from "../../public/context/user.context";

type idProps = {
  _id: string | any;
};

const BusinessProfileComponent = ({ _id }: idProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFormModal, setOpenFormmModal] = useState(false);
  const [openSubModal, setOpenSubModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>({});
  const [profileData, setProfileData] = useState<any>({});
  const [subData, setsubData] = useState<subProps>({
    expires: "",
    started: "",
    status: false,
    type: "",
  });

  const [businessData, setBusinessData] = useState<businessProps>({
    currency: "",
    currencySymbol: "",
    name: "",
    type: "",
    sector: "",
  });

  console.log('Profile--data', profileData)

  const [action, setAction] = useState("");
  const router = useRouter();
  const { reload } = useContext(UserRoleContext);

  const userBusiness = async () => {
    setIsLoading(true);
    const res = await getOneBusiness(_id);
    setBusinessData(res?.oneBusiness?.business);
    setsubData(res?.oneBusiness?.subscription_status);
    console.log("profile data", res, _id);
    setProfileData(res);
    setIsLoading(false);
  };

  const handleDeleteOneBusiness = async () => {
    const response = await deleteOneBusiness(_id);
  };

  const handleSuspendOneBusiness = async () => {
    await suspendBusiness(_id);
  };

  useEffect(() => {
    userBusiness();
  }, []);
  return (
    <Box mb={20}>
      <VeridoBreadCrump
        items={[
          { name: "Home", to: "/admin", current: true },
          { name: "Business", to: "/business", current: true },
          {
            name: profileData?.business?.name || "No Business",
            to: "#",
            current: false,
          },
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
                  {profileData?.full_name || "No Business"}
                </Text>
                <Text fontWeight={200} fontSize={14}>
                  {profileData?.email?.includes("@")
                    ? profileData.email
                    : "No Email"}
                </Text>
                <CustomButton
                  buttonProps={{
                    onClick: () => {
                      setAction("delete");
                      setModalContent({
                        title: "Confirm Delete",
                        body: "Please, confirm your deletion of this account. Once delected, all user details and history are lost ",
                      });
                      setIsOpen(true);
                    },
                  }}
                  title="Delete Business"
                />
              </VStack>
              <Read />
            </Flex>
            <Box flexBasis="77%" p={5}>
              <Flex width="100%" justify="space-between">
                <VStack align="flex-start" width={400}>
                  <Text fontWeight={400} fontSize={28} textAlign="left">
                    Business Owner’s Informations
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
                          title: "Confirm suspensions",
                          body: "Please, confirm your suspension of this account. Once suspended, users will be unable to login into their verido account",
                        });
                        setIsOpen(true);
                      },
                    }}
                    title={profileData?.suspended ? "Re-activate" : "Suspend"}
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
                  title: "Enterprise Name",
                  value: profileData?.oneBusiness?.business?.name,
                },
                {
                  title: "Institution",
                  value: "Not available",
                },
                {
                  title: "Admin Name",
                  value: "Admin",
                },
                {
                  title: "Username",
                  value: profileData?.oneBusiness?.username,
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
              <CustomButton
                buttonProps={{
                  width: 137,
                  bgColor: theme.colors.brand.suspend,
                  onClick: () => {
                    setOpenFormmModal(true);
                  },
                }}
                title={"Update Business"}
              />
              <Divider pt={8} orientation="horizontal" />
              <Text fontWeight={400} fontSize={28} textAlign="left" pt={8}>
                Registeration
              </Text>
              {[
                {
                  title: "Date Joined",
                  value: new Date(
                    profileData?.oneBusiness?.dateJoined
                  ).toLocaleDateString(),
                },
                {
                  title: "Status",
                  value: profileData?.oneBusiness?.subscription_status?.type,
                },
                {
                  title: "Subscription Expires",
                  value: profileData?.oneBusiness?.subscription_status?.expires,
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
                  <Text textTransform="capitalize">{element.value}</Text>
                </Flex>
              ))}
              <CustomButton
                buttonProps={{
                  width: 157,
                  bgColor: theme.colors.brand.suspend,
                  onClick: () => {
                    setOpenSubModal(true);
                  },
                }}
                title={"Update Subscription"}
              />
            </Box>
          </Flex>
          <BusinessOwnerConsultant
            name={profileData?.oneBusiness?.userConsultant?.username}
            id={profileData?.oneBusiness?.userConsultant?._id}
            enterprise_name={profileData?.oneBusiness?.business?.name}
            moneyin={{
              totalMoneyIn: profileData?.alldata?.money_in?.totalMoneyIn,
              percent: profileData?.alldata?.money_in?.percent,
            }}
            moneyout={{
              totalMoneyIn: profileData?.alldata?.money_out?.totalMoneyOut,
              percent: profileData?.alldata?.money_out?.percent,
            }}
            overhead={{
              totalMoneyIn: profileData?.alldata?.overhead?.totalOverhead,
              percent: profileData?.alldata?.overhead?.percent,
            }}
          />
          <Box_6
            data={{
              moneyin: profileData?.alldata?.money_in?.totalMoneyIn,
              moneyout: profileData?.alldata?.money_out?.totalMoneyOut,
            }}
          />
          <Box_7
            data={{
              moneyin: profileData?.alldata?.money_in?.totalMoneyIn,
              overhead: profileData?.alldata?.overhead?.totalOverhead,
              direct_labour: profileData?.alldata?.money_in?.DirectLabour,
              direct_materials: profileData?.alldata?.money_in?.DirectMaterials,
            }}
          />
          <Box_8
            data={{
              moneyin: profileData?.alldata?.money_in?.totalMoneyIn,
              overhead: profileData?.alldata?.overhead?.totalOverhead,
              direct_labour: profileData?.alldata?.money_in?.DirectLabour,
              direct_materials: profileData?.alldata?.money_in?.DirectMaterials,
            }}
          />
        </>
      ) : (
        <ProfileSkeleton />
      )}
      <VeridoModal
        isOpen={isOpen}
        modalContent={modalContent}
        setAction={setAction}
        setIsOpen={setIsOpen}
        onClick={() => {
          if (action == "suspend") {
            handleSuspendOneBusiness();
          } else {
            handleDeleteOneBusiness();
          }
          router.push("/dashboard/business");
          setIsOpen(false);
        }}
      />
      <FormModal
        id={_id}
        business={businessData}
        open={openFormModal}
        setOpen={setOpenFormmModal}
      />

      <SubModal
        id={_id}
        setOpen={setOpenSubModal}
        open={openSubModal}
        sub={subData}
      />
    </Box>
  );
};

export default BusinessProfileComponent;

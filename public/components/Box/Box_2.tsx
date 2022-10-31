import {
  Box,
  Flex,
  useTheme,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Growth from "../../imgs/svgs/growth.svg";
import CustomButton from "../button";
import getRole from "../../utils/utils";
import { useState, useEffect } from "react";
import NewConsultantModal from "../newConsultantModal";
import NewBusinessModal from "../newBusinessModal";
import Image from 'next/image'

type dataprops = {
  data: any;
};

const Box_2 = ({ data = [] }: dataprops) => {
  const theme = useTheme();
  const [role, setRole] = useState<string | null>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openBusinessModal, setOpenBusinessModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const role = await getRole();
      setRole(role);
    })();
  }, []);

  return (
    <Flex gap={10} mt={10}>
      <Box
        width="67%"
        height="524px"
        border="px solid #DFE6E9"
        bgColor={theme.colors.brand.white}
        borderRadius={16}
        p={10}
      >
        <Flex justify="space-between">
          <Text color={theme.colors.brand.black} fontSize={17} fontWeight={400}>
            Recent Subscriptions
          </Text>
          <Text color={theme.colors.brand.black} fontSize={14} fontWeight={400}>
            View all
          </Text>
        </Flex>
        <TableContainer mt={10}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Business Owners</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.length ? (
                <>
                  {data?.recent_subscription?.map((element: any, idx: any) => {
                    const date = new Date(element.dateJoined);

                    return (
                      <Tr fontSize={15} fontWeight={300} key={idx}>
                        <Td>{date.toLocaleDateString()}</Td>
                        <Td>{element?.full_name}</Td>
                        <Td>{20.0}</Td>
                        <Td>
                          <Flex justify="center" align="center">
                            <Box
                              p="10px 20px"
                              bgColor={
                                element?.subscription_status?.type == "active"
                                  ? "#EAFFF8"
                                  : element?.subscription_status?.type ==
                                    "trial"
                                  ? "#FFF9E9"
                                  : element?.subscription_status?.type ==
                                    "expired"
                                  ? "#FFE7EA"
                                  : "#fff"
                              }
                              color={
                                element?.subscription_status?.type == "active"
                                  ? "#00F7BF"
                                  : element?.subscription_status?.type ==
                                    "trial"
                                  ? "#FFD252"
                                  : element?.subscription_status?.type ==
                                    "expired"
                                  ? "#FF0022"
                                  : "#fff"
                              }
                              borderRadius={10}
                              borderColor={
                                element?.subscription_status?.type == "active"
                                  ? "#00F7BF"
                                  : element?.subscription_status?.type ==
                                    "trial"
                                  ? "#FFD252"
                                  : element?.subscription_status?.type ==
                                    "expired"
                                  ? "#FF0022"
                                  : "#fff"
                              }
                              borderWidth={1}
                              borderStyle="solid"
                            >
                              {element?.subscription_status?.type}
                            </Box>
                          </Flex>
                        </Td>
                        <Td>{element?.action}</Td>
                      </Tr>
                    );
                  })}
                </>
              ) : (
                <Flex
                  justify="center"
                  align="center"
                  height="524px"
                  width="100%"
                >
                  <Image src="/imgs/svgs/empty.svg" width={200} height={200} />
                </Flex>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Flex
        border="px solid #DFE6E9"
        bgColor={theme.colors.brand.white}
        borderRadius={16}
        height="524px"
        p={30}
        width="33%"
        justify="center"
        align="center"
      >
        <Box width={200}>
          <Flex flexDir="column" width="100%" align="center">
            <Growth />
            <Text textAlign="center">
              Create New Business Account {"\n"} or Consultants
            </Text>
            <CustomButton
              buttonProps={{
                mt: 2,
                onClick: () => setOpenBusinessModal(!openBusinessModal),
              }}
              title="Create Business account"
            />
            {role === "Admin" && (
              <>
                {/* <CustomButton
                  buttonProps={{
                    mt: 2,
                  }}
                  title="Create Partner account"
                /> */}
                <CustomButton
                  buttonProps={{
                    mt: 2,
                    onClick: () => setOpen(!open),
                  }}
                  title="Create Consultant account"
                />
              </>
            )}
            {role === "Partner" && (
              <>
                <CustomButton
                  buttonProps={{
                    mt: 2,
                    onClick: () => setOpen(!open),
                  }}
                  title="Create Consultant account"
                />
              </>
            )}
          </Flex>
          <NewConsultantModal open={open} setOpen={setOpen} />
          <NewBusinessModal
            open={openBusinessModal}
            setOpen={setOpenBusinessModal}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Box_2;

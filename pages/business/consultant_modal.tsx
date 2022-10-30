import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
  Text,
  Icon,
  useTheme,
  Box,
} from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";
import React, { useState, useEffect, useContext } from "react";
import { consultantProps } from "../../public/components/types";
import { UserRoleContext } from "../../public/context/user.context";
import { useRouter } from "next/router";

import {
  getAllConsultants,
  addConsultant,
} from "../../public/services/network";

type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ConsultantModal({ open, setOpen }: modalProps) {
  const theme = useTheme();
  const router = useRouter();
  const { reload, setReload } = useContext(UserRoleContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = router.query;

  const [consultants, setConsultants] = useState<consultantProps[]>([]);
  const [selectedConsultant, setSelected] = useState<string | undefined>("");
  const [userID, setUserID] = useState<string | any>("");

  useEffect(() => {
    setUserID(params?.id);
  }, [params]);

  useEffect(() => {
    (async () => {
      const res = await getAllConsultants();
      setConsultants(res);
    })();
  }, []);

  const handleAddConsultant = async () => {
    const body = { id: selectedConsultant?.toString() };
    setIsLoading(true);
    const res = await addConsultant(userID, body);
    setIsLoading(false);
    setOpen(!open);
    setReload(!reload);
  };

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a consultant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack width="100%">
              {consultants?.map((ele, idx) => (
                <HStack
                  key={idx}
                  onClick={() => setSelected(ele._id)}
                  backgroundColor={theme.colors.brand.bg}
                  padding={2}
                  transition="all ease 200ms"
                  _hover={{
                    bgColor:
                      selectedConsultant === ele._id
                        ? theme.colors.brand.primary
                        : theme.colors.brand.primary_faded,
                    color: theme.colors.brand.white,
                    cursor: "pointer",
                  }}
                  width="100%"
                  justify="space-between"
                >
                  <VStack align="flex-start">
                    <Text>{ele.username}</Text>
                    <Text fontSize={12}>{ele.mobile_number}</Text>
                  </VStack>
                  {selectedConsultant === ele._id ? (
                    <Icon as={BsCheck2} />
                  ) : (
                    <Box />
                  )}
                </HStack>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              colorScheme="blue"
              onClick={handleAddConsultant}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

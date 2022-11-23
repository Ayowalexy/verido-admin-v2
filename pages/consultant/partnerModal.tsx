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
  ButtonProps,
  Icon,
  HStack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

type contentProps = {
  title: string;
  body: string;
};

type modalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClick: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PartnerModal = ({ isOpen, children, onClick, setIsOpen }: modalProps) => {
  const { onClose } = useDisclosure();
  const theme = useTheme();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <Icon as={AiOutlineInfoCircle} color="#FF9500" />
              <Text fontWeight={500} fontSize={16}>
                All Partners
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton onClick={() => setIsOpen(false)} />
          <ModalBody >{children}</ModalBody>

          <ModalFooter>
            <Button
              bgColor={theme.colors.brand.white}
              color={theme.colors.brand.primary}
              border={`1px solid ${theme.colors.brand.primary}`}
              colorScheme="blue"
              _hover={{
                bgColor: theme.colors.brand.primary,
                color: theme.colors.brand.white,
              }}
              mr={3}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              color="#fff"
              bgColor={theme.colors.brand.suspend}
              mr={3}
              onClick={() => onClick()}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PartnerModal;

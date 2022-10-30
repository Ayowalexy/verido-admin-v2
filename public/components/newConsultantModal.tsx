import React, { useState, ChangeEvent, useEffect } from "react";
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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { createNewBusiness, createNewConsultant } from "../services/network";
import { businessProps, consultantProps } from "./types";
import { getUser } from "../utils/utils";

type formProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewConsultantModal({ open, setOpen }: formProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formdata, setFormdata] = useState<consultantProps>({
    username: "",
    password: "",
    email: "",
    mobile_number: "",
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    setIsLoading(true);
    const user = await getUser();
    const res = await createNewConsultant(user?._id, formdata);
    setIsLoading(false);
    setOpen(!open);
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={open}
        onClose={() => setOpen(!open)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your consultant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Username"
                value={formdata.username?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                name="email"
                value={formdata.email?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                name="mobile_number"
                placeholder="Mobile number"
                value={formdata.mobile_number?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                placeholder="Password"
                value={formdata.password?.toString()}
                onChange={handleInput}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              onClick={handleCreate}
              colorScheme="blue"
              mr={3}
            >
              Create
            </Button>
            <Button onClick={() => setOpen(!open)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

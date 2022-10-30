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
  Select
} from "@chakra-ui/react";
import {  createNewBusinessUser, getAllConsultants } from "../services/network";
import {  newBusinessProps } from "./types";
import { getUser } from "../utils/utils";

type formProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewBusinessModal({ open, setOpen }: formProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [formdata, setFormdata] = useState<newBusinessProps>({
    full_name: "",
    email: "",
    password: "",
    username: "",
    consultant_id: ""
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  

  const handleCreate = async () => {
    setIsLoading(true);
    await createNewBusinessUser(formdata);
    setIsLoading(false);
    setOpen(!open);
  };

  useEffect(() => {
    (async () => {
      const res = await getAllConsultants();
      setData(res)
    })()
  }, [])

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
          <ModalHeader>Create your business</ModalHeader>
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
              <FormLabel>Full Name</FormLabel>
              <Input
                name="full_name"
                placeholder="Full name"
                value={formdata.full_name?.toString()}
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

            <FormControl mt={4}>
              <FormLabel>Subscription type</FormLabel>
              <Select
                name="consultant_id"
                onChange={handleInput}
                placeholder="Select option"
              >
                {
                  data?.map((element: any) => (
                    <option key={element._id} value={element._id}>{element.username}</option>
                  ))
                }
              </Select>
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

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
  Select,
} from "@chakra-ui/react";

import { subscription } from "../services/network";
import { subProps } from "./types";

type formProps = {
  open: boolean;
  sub: subProps;
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SubModal({ open, setOpen, sub, id }: formProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formdata, setFormdata] = useState<subProps>({
    expires: "",
    started: "",
    status: false,
    type: "",
  });

  console.log("sub data", sub);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    setFormdata({
      expires: sub.expires,
      started: sub.started,
      status: sub.status,
      type: sub.type,
    });
  }, [sub]);

  const handleSave = async () => {
    setIsLoading(true);
    const res = await subscription(id, formdata);
    setIsLoading(false);
    setOpen(!open);
  };

  console.log("formdata", formdata.started?.split("/").reverse().join("-"));

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
          <ModalHeader>Update subscription</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Subscription starts</FormLabel>
              <Input
                name="started"
                type="date"
                value={formdata.started?.split("/").reverse().join("-")}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Subscription expires</FormLabel>
              <Input
                name="expires"
                type="date"
                value={formdata.expires?.split("/").reverse().join("-")}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Subscription type</FormLabel>
              <Select
                name="type"
                onChange={handleInput}
                placeholder="Select option"
              >
                <option value="trial">Trial</option>
                <option value="Subscribed">Subscribed</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              onClick={handleSave}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={() => setOpen(!open)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

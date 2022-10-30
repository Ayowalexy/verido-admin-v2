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
import { createNewBusiness } from "../services/network";
import { businessProps } from "./types";

type formProps = {
  open: boolean;
  business: businessProps;
  id: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormModal({ open, setOpen, business, id }: formProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formdata, setFormdata] = useState<businessProps>({
    currency: '',
    currencySymbol: '',
    name: '',
    type: '',
    sector: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    
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
        currency: business?.currency,
        currencySymbol: business?.currencySymbol,
        name: business?.name,
        type: business?.type,
        sector: business?.sector,
    })
  }, [business])


  const handleSave = async () => {
    setIsLoading(true);
    const res = await createNewBusiness(id, formdata);
    setIsLoading(false);
    setOpen(!open);
  }

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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Business name</FormLabel>
              <Input
                name='name'
                placeholder="Business name"
                value={formdata.name?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Business type</FormLabel>
              <Input
                placeholder="Business type"
                name="type"
                value={formdata.type?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Business sector</FormLabel>
              <Input
                name='sector'
                placeholder="Business sector"
                value={formdata.sector?.toString()}
                onChange={handleInput}
              />
            </FormControl>


            <FormControl mt={4}>
              <FormLabel>Currency</FormLabel>
              <Input
                name='currency'
                placeholder="Currency"
                value={formdata.currency?.toString()}
                onChange={handleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Currency symbol</FormLabel>
              <Input
                name='currencySymbol'
                placeholder="Currency symbol"
                value={formdata.currencySymbol?.toString()}
                onChange={handleInput}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button isLoading={isLoading} onClick={handleSave} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => setOpen(!open)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

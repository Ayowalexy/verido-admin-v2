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
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { addVideos } from "../../services/network";
import React, { ChangeEvent, useState } from "react";

// interface vidoeInterface {
//   open: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setVideos: React.Dispatch<React.SetStateAction<[]>>;
// }

// interface addvidoeinterface {
//     title: string;
//     category: string;
//     vidoeID: string;
// }

const AddVidoeModal = ({ open, setIsOpen, setVideos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false)

  const [detail, setDetails] = useState({
    title: '',
    category: "",
    vidoeID: ''
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setDetails({
        ...detail, 
        [name]: value
    })
  }

  const handleAdd =async () => {
    setIsLoading(true)
    const res = await addVideos(detail.vidoeID, detail.category, detail.title)
    if(Array.isArray(res?.data.data)){
      setVideos(res.data.data)
      setIsOpen(!open);
    }
    setIsLoading(false)
  }


  return (
    <>
      <Modal isOpen={open} onClose={() => setIsOpen(!open)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="flex-start" mt='15px'>
              <Text color="#000" fontSize="17px" fontWeight={400}>
                Video ID
              </Text>
              <Input width="100%" height="55px" name='vidoeID' onChange={handleChange} placeholder="Video id" />
            </VStack>
            <VStack align="flex-start" mt='15px'>
              <Text color="#000" fontSize="17px" fontWeight={400}>
                Video <title></title>
              </Text>
              <Input width="100%" height="55px" onChange={handleChange} name='title' placeholder="Video title" />
            </VStack>
            <VStack align="flex-start" mt='15px'>
              <Text color="#000" fontSize="17px" fontWeight={400}>
                Category
              </Text>
              <Input width="100%" height="55px" onChange={handleChange} name='category' placeholder="category" />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='facebook' onClick={handleAdd} isLoading={isLoading}>
                ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddVidoeModal;

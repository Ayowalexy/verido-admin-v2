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
    useTheme
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

type contentProps = {
    title: string,
    body: string
}


type modalProps = {
    isOpen: boolean,
    modalContent: contentProps;
    setAction: React.Dispatch<React.SetStateAction<string>>;
    onClick: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VeridoModal = ({ isOpen,  modalContent, setAction, onClick, setIsOpen }: modalProps) => {
    const { onClose } = useDisclosure();
    const theme = useTheme();
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <Icon as={AiOutlineInfoCircle} color='#FF9500' />
                            <Text fontWeight={500} fontSize={16}>{modalContent.title}</Text>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton onClick={() => setIsOpen(false)} />
                    <ModalBody>
                        {modalContent.body}
                    </ModalBody>

                    <ModalFooter>
                        <Button 
                            bgColor={theme.colors.brand.white}
                            color={theme.colors.brand.primary}
                            border={`1px solid ${theme.colors.brand.primary}`}
                            colorScheme='blue' 
                            _hover={{
                                bgColor: theme.colors.brand.primary,
                                color: theme.colors.brand.white
                            }}
                            mr={3} 
                            onClick={() => {
                                setAction("")
                                setIsOpen(false)
                            }}
                            >
                            No
                        </Button>
                        <Button 
                            color='#fff' 
                            bgColor={theme.colors.brand.suspend} 
                            mr={3} 
                            onClick={() => onClick()}
                            >
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default VeridoModal
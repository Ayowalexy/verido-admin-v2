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
import { AiOutlineInfoCircle } from 'react-icons/ai'

type contentProps = {
    title: string,
    body: string
}


type modalProps = {
    isOpen: boolean,
    buttonProps: ButtonProps,
    modalContent: contentProps
}

const VeridoModal = ({ isOpen, buttonProps, modalContent }: modalProps) => {
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
                    <ModalCloseButton {...buttonProps} />
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
                            {...buttonProps}>
                            No
                        </Button>
                        <Button color='#fff' bgColor={theme.colors.brand.suspend} mr={3} {...buttonProps}>
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default VeridoModal
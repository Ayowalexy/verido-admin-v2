import {
    Flex,
    Box,
    Text,
    useTheme,
    Wrap,
    WrapItem,
    Icon,
    HStack
} from '@chakra-ui/react';
import { BsCalendar } from 'react-icons/bs'
import CashMovement from '../../../pages/dashboard/chats/cash-movement';


const Box_6 = () => {
    const theme = useTheme();
    return (
        <Box
            width='100%'
            height={426}
            bgColor={theme.colors.brand.white}
            borderRadius={7}
            border='1px solid #DFE6E9'
            mt={10}
            p={10}
        >
            <Flex
                justify='space-between'
            >
                <Text>Cash Movement</Text>
                <Flex
                    flexDir='column'
                    mb={10}
                >
                    <HStack
                        border={`1px solid ${theme.colors.brand.yoda}`}
                        p={2}
                        borderRadius={10}
                        width={100}
                        alignSelf='flex-end'
                    >
                        <Text
                            color={theme.colors.brand.black}
                            fontSize={14}
                        >2020</Text>
                        <Icon as={BsCalendar} />
                    </HStack>
                    <HStack
                        pt={3}
                    >
                        <HStack>
                            <Box
                                w={3}
                                h={3}
                                bgColor={theme.colors.brand.primary}
                                borderRadius={10}
                            />
                            <Text>Money in</Text>
                        </HStack>
                        <HStack>
                            <Box
                                w={3}
                                h={3}
                                bgColor={theme.colors.brand.danger}
                                borderRadius={10}
                            />
                            <Text>Money in</Text>
                        </HStack>
                    </HStack>
                </Flex>
            </Flex>

            <CashMovement />


        </Box>
    )
}

export default Box_6
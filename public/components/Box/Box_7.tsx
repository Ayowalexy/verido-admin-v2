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
import MoneyInMoneyOut from '../../../pages/dashboard/chats/money_in_money_out';

const Box_7 = () => {
    const theme = useTheme();
    return (
        <Box
            width='100%'
            height={466}
            bgColor={theme.colors.brand.white}
            borderRadius={7}
            border='1px solid #DFE6E9'
            mt={10}
            p={10}
        >
            <Flex
                justify='space-between'
            >
                <Text>Money In VS Money Out</Text>
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
                        gap={4}
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
                            <Text>Direct Labour</Text>
                        </HStack>
                        <HStack>
                            <Box
                                w={3}
                                h={3}
                                bgColor='rgba(0, 122, 255, 1)'
                                borderRadius={10}
                            />
                            <Text>Overhead</Text>
                        </HStack>
                        <HStack>
                            <Box
                                w={3}
                                h={3}
                                bgColor='rgba(255, 149, 0, 1)'
                                borderRadius={10}
                            />
                            <Text>Direct Material</Text>
                        </HStack>
                    </HStack>
                </Flex>
            </Flex>

            <MoneyInMoneyOut />


        </Box>
    )
}

export default Box_7
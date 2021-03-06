import {
    Box,
    Text,
    Flex,
    useTheme,
    HStack,
    VStack,
    Wrap,
    WrapItem,
    Avatar,
    Icon
} from '@chakra-ui/react'
import { BsArrowRight, BsThreeDots } from 'react-icons/bs'
import Downlinks from '../../../pages/dashboard/chats/downlinks';
import CashFlow from '../../../pages/dashboard/chats/radar';


const Box_3 = () => {
    const theme = useTheme();
    const { colors: { brand: { black, white, yoda } } } = theme;
    const { colors: { chart: { money_in, money_out, overhead } } } = theme;


    return (
        <Flex
            mt={10}
            gap={10}
        >
            <Flex
                width='70%'
                flexDir='column'
                gap={10}
            >
                <Box
                    height='126px'
                    borderRadius={16}
                    width='100%'
                    gap={10}
                    bgColor={white}
                    border='1px solid #DFE6E9'
                >
                    <Flex
                        justify='space-between'
                        alignItems='center'
                        pl={6}
                        height='100%'
                        pr={6}
                    >
                        <Box>
                            <Text
                                color={black}
                                fontSize={16}
                                fontWeight={700}
                            >Top Businesses</Text>
                            <Text
                                color={yoda}
                                fontWeight={300}
                                fontSize={14}
                                pt={3}
                            >Highest earnings this month</Text>
                            <HStack>
                                <Text
                                    fontWeight={700}
                                    color={black}
                                    fontSize={20}
                                >
                                    $442.98
                                </Text>
                                <Text
                                    color={yoda}
                                    fontWeight={300}
                                    fontSize={14}
                                >
                                    $22 more than last month
                                </Text>
                            </HStack>

                        </Box>
                        <Box>
                            <VStack>
                                <Text
                                    fontWeight={700}
                                    color={black}
                                    fontSize={16}
                                >Business Owners</Text>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Icon alignSelf='center' as={BsArrowRight} />
                                    </WrapItem>
                                </Wrap>
                            </VStack>
                        </Box>
                    </Flex>

                </Box>
                <Box
                    height='126px'
                    borderRadius={16}
                    width='100%'
                    gap={10}
                    bgColor={white}
                    border='1px solid #DFE6E9'
                >
                    <Flex
                        height={126}
                        justify='space-between'
                        align='center'
                        pl={4}
                        pr={4}
                    >
                        <Box>
                            <Text color={black} fontSize={16} fontWeight={700}>Cash Flow</Text>
                            <Text color={yoda} fontSize={14} fontWeight={300}>This month</Text>
                            <Text color={black} fontSize={20} fontWeight={700}>$6.340.42</Text>
                        </Box>
                        <Box>
                            {[{ type: 'Money in', color: money_in }, { type: 'Overhead', color: overhead }, { type: 'Money out', color: money_out }]
                                .map((element, idx) => (
                                    <HStack key={idx}>
                                        <Box
                                            width={2}
                                            height={2}
                                            borderRadius={5}
                                            bgColor={element.color}
                                        />
                                        <Text
                                            color={black}
                                            fontSize={12}
                                            fontWeight={700}
                                        >
                                            {element.type}
                                        </Text>
                                    </HStack>
                                ))}
                        </Box>
                        <Flex
                            width='50%'
                        >
                            {[
                                {
                                    type: 'Money in',
                                    color: money_in,
                                    percentage: '35%'
                                },
                                {
                                    type: 'Overhead',
                                    color: overhead,
                                    percentage: '15%'
                                },
                                {
                                    type: 'Money out',
                                    color: money_out,
                                    percentage: '55%'
                                },
                            ].map((element, idx) => (
                                <Flex
                                    key={idx}
                                    justify='center'
                                    align='center'
                                    width={`${element.percentage}`}
                                    height='40px'
                                    borderTopLeftRadius={idx == 0 ? 20 : 0}
                                    borderTopRightRadius={idx == 2 ? 20 : 0}
                                    borderBottomLeftRadius={idx == 0 ? 20 : 0}
                                    borderBottomRightRadius={idx == 2 ? 20 : 0}
                                    bgColor={element.color}
                                >
                                    <Text
                                        color={white}
                                        fontSize={12}
                                    >
                                        {element.percentage}
                                    </Text>
                                </Flex>
                            ))
                            }


                        </Flex>
                    </Flex>

                </Box>
                <Box
                    height='126px'
                    borderRadius={16}
                    width='100%'
                    gap={10}
                    bgColor={white}
                    border='1px solid #DFE6E9'
                >
                    <Flex
                        justify='space-between'
                        alignItems='center'
                        pl={6}
                        height='100%'
                        pr={6}
                    >
                        <Box>
                            <Text
                                color={black}
                                fontSize={16}
                                fontWeight={700}
                            >Top Consultants</Text>
                            <Text
                                color={yoda}
                                fontWeight={300}
                                fontSize={14}
                                pt={3}
                            >Earnings this month</Text>
                            <HStack>
                                <Text
                                    fontWeight={700}
                                    color={black}
                                    fontSize={20}
                                >
                                    $442.98
                                </Text>
                                <Text
                                    color={yoda}
                                    fontWeight={300}
                                    fontSize={14}
                                >
                                    $22 more than last month
                                </Text>
                            </HStack>

                        </Box>
                        <Box>
                            <VStack>
                                <Text
                                    fontWeight={700}
                                    color={black}
                                    fontSize={16}
                                >Consultants</Text>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Avatar size='sm' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </WrapItem>
                                    <WrapItem>
                                        <Icon alignSelf='center' as={BsArrowRight} />
                                    </WrapItem>
                                </Wrap>
                            </VStack>
                        </Box>
                    </Flex>

                </Box>
            </Flex>
            <Box
                height='442px'
                bgColor={white}
                borderRadius={16}
                p={5}
                width='30%'
            >
                <Flex
                    flexDir='column'
                >
                    <Flex
                        justify='space-between'
                    >
                        <Text
                            color={black}
                            fontSize={16}
                        >
                            Downlinks
                        </Text>
                        <Icon as={BsThreeDots} />

                    </Flex>
                    <Box
                        width={250}
                        height={300}
                        alignSelf='center'
                    >
                        <CashFlow />
                    </Box>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Box_3
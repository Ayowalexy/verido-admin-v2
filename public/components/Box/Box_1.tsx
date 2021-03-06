import {
    Box,
    Flex,
    Text,
    useTheme,
    Icon,
    HStack
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs'
import Card from '../card';
import BusinessOwnners from '../../../pages/dashboard/chats/business_owners';
import ConsultantChart from '../../../pages/dashboard/chats/consultant';
import Active from '../../../pages/dashboard/chats/active';
import Downlinks from '../../../pages/dashboard/chats/downlinks';



const Box_1 = () => {
    const theme = useTheme();
    const { colors: { brand: { black, white, yoda } } } = theme;
    const { colors: { chart: { monthly, quarterly, yearly } } } = theme;

    return (
        <Flex
            gap={10}

        >
            <Flex
                width='70%'
                flexWrap='wrap'
                flexDir='column'
                gap={10}
            >
                <Flex
                    gap={10}
                    mt={7}
                >
                    <Card
                        number='1243'
                        card_type='Business Owners'
                    >
                        <BusinessOwnners />
                    </Card>
                    <Card
                        number='543'
                        card_type='Consultants'
                    >
                        <ConsultantChart />
                    </Card>
                    <Card
                        number='893'
                        card_type='Active Subscribers'
                    >
                        <Active type='subscribers' value={0.5} />
                    </Card>
                    <Card
                        number='622'
                        card_type='Active Consultants'
                    >
                        <Active type='consultante' value={0.8} />

                    </Card>

                </Flex>
                <Flex
                    flexGrow={1}
                    bg={white}
                    height={126}
                    borderRadius={16}
                    justify='space-between'
                    align='center'
                    pl={4}
                    pr={4}
                >
                    <Box>
                        <Text color={black} fontSize={16} fontWeight={300}>Subscriptions</Text>
                        <Text color={yoda} fontSize={14} fontWeight={300}>Total</Text>
                        <Text color={black} fontSize={20} fontWeight={400}>$6.340.42</Text>
                    </Box>
                    <Box>
                        {[{ type: 'Yearly', color: yearly }, { type: 'Quarterly', color: quarterly }, { type: 'Monthly', color: monthly }]
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
                                type: 'Yearly',
                                color: yearly,
                                percentage: '45%'
                            },
                            {
                                type: 'Quarterly',
                                color: quarterly,
                                percentage: '25%'
                            },
                            {
                                type: 'Monthly',
                                color: monthly,
                                percentage: '35%'
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
            </Flex>
            <Box
                mt={7}
                width='30%'
                bg={white}
                p={5}
                borderRadius={16}
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
                    <Downlinks value={0.8} />
                    <Flex
                        justify='space-between'
                        mt={10}
                    >
                        <HStack>
                            <>
                                <Box
                                    width={2}
                                    height={2}
                                    borderRadius={5}
                                    bgColor='rgba(8, 167, 48, 1)'
                                />
                                <Text
                                    color={black}
                                    fontSize={12}
                                >
                                    Business Owners
                                </Text>
                            </>
                        </HStack>
                        <HStack>
                            <>
                                <Box
                                    width={2}
                                    height={2}
                                    borderRadius={5}
                                    bgColor='rgba(0, 122, 255, 1)'
                                />
                                <Text
                                    color={black}
                                    fontSize={12}
                                >
                                    Business
                                </Text>
                            </>
                        </HStack>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Box_1
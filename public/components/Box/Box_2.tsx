import {
    Box,
    Flex,
    useTheme,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import Growth from '../../imgs/svgs/growth.svg'
import CustomButton from '../button';



const Box_2 = () => {
    const theme = useTheme();
    const data = [
        {
            date: 'June 9,2020',
            business_owners: 'Elon Musk',
            amount: '$1,322.45',
            status: 'Active',
            action: ''
        },
        {
            date: 'June 9,2020',
            business_owners: 'Christiano Ronaldo',
            amount: '$1,322.45',
            status: 'Active',
            action: ''
        },
        {
            date: 'June 9,2020',
            business_owners: 'Jeff Bezos',
            amount: '$1,322.45',
            status: 'Suspended',
            action: ''
        },
        {
            date: 'June 9,2020',
            business_owners: 'Richard Hamilton',
            amount: '$1,322.45',
            status: 'Active',
            action: ''
        },
        {
            date: 'June 9,2020',
            business_owners: 'Lebron James',
            amount: '$1,322.45',
            status: 'Expired',
            action: ''
        },
    ]

    
    return (
        <Flex
            gap={10}
            mt={10}

        >
            <Box
                width='67%'
                height='524px'
                border='px solid #DFE6E9'
                bgColor={theme.colors.brand.white}
                borderRadius={16}
                p={10}
            >
                <Flex
                    justify='space-between'
                >
                    <Text
                        color={theme.colors.brand.black}
                        fontSize={17}
                        fontWeight={400}
                    >
                        Recent Subscriptions
                    </Text>
                    <Text
                        color={theme.colors.brand.black}
                        fontSize={14}
                        fontWeight={400}
                    >
                        View all
                    </Text>
                </Flex>
                <TableContainer mt={10}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Business Owners</Th>
                                <Th >Amount</Th>
                                <Th>Status</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((element, idx) => (
                                    <Tr fontSize={15} fontWeight={300} key={idx}>
                                        <Td>{element?.date}</Td>
                                        <Td>{element?.business_owners}</Td>
                                        <Td>{element?.amount}</Td>
                                        <Td

                                        >
                                            <Flex
                                                justify='center'
                                                align='center'
                                            >
                                                <Box
                                                    p='10px 20px'
                                                    bgColor={
                                                        element.status == 'Active'
                                                            ? '#EAFFF8'
                                                            : element.status == 'Suspended'
                                                                ? '#FFF9E9'
                                                                : element.status == 'Expired'
                                                                    ? '#FFE7EA'
                                                                    : '#fff'
                                                    }
                                                    color={
                                                        element.status == 'Active'
                                                            ? '#00F7BF'
                                                            : element.status == 'Suspended'
                                                                ? '#FFD252'
                                                                : element.status == 'Expired'
                                                                    ? '#FF0022'
                                                                    : '#fff'
                                                    }
                                                    borderRadius={10}
                                                    borderColor={
                                                        element.status == 'Active'
                                                            ? '#00F7BF'
                                                            : element.status == 'Suspended'
                                                                ? '#FFD252'
                                                                : element.status == 'Expired'
                                                                    ? '#FF0022'
                                                                    : '#fff'
                                                    }
                                                    borderWidth={1}
                                                    borderStyle='solid'
                                                >
                                                    {element?.status}
                                                </Box>
                                            </Flex>
                                        </Td>
                                        <Td>{element?.action}</Td>
                                    </Tr>
                                ))
                            }

                        </Tbody>

                    </Table>
                </TableContainer>

            </Box>
            <Flex
                border='px solid #DFE6E9'
                bgColor={theme.colors.brand.white}
                borderRadius={16}
                height='524px'
                p={30}
                width='33%'
                justify='center'
                align='center'
            >
                <Box
                    width={200}
                >
                    <Flex
                        flexDir='column'
                        width='100%'
                        align='center'
                    >
                        <Growth />
                        <Text
                            textAlign='center'
                        >
                            Create New Business Account {'\n'} or Consultants
                        </Text>
                        <CustomButton
                            title='Create Account Now'
                        />
                    </Flex>
                </Box>


            </Flex>
        </Flex>
    )
}

export default Box_2
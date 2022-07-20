import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
} from "@ajna/pagination";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect, SyntheticEvent } from "react";
import { AiOutlineUser } from 'react-icons/ai'
import { BsChatFill } from 'react-icons/bs'

import {

    Select,
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
    Icon,
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Checkbox
} from '@chakra-ui/react'
import CustomButton from "../button";

const data = [
    {
        enterprise_name: 'Some table text ',
        name: 'Some table text ',
        expires: 'Some table text ',
        date_joined: 'Some table text ',
        status: 'Active',
        action: ''
    },
    {
        enterprise_name: 'Some table text ',
        name: 'Some table text ',
        expires: 'Some table text ',
        date_joined: 'Some table text ',
        status: 'Suspended',
        action: ''
    },
    {
        enterprise_name: 'Some table text ',
        name: 'Some table text ',
        expires: 'Some table text ',
        date_joined: 'Some table text ',
        status: 'Pending Approval',
        action: ''
    },
    {
        enterprise_name: 'Some table text ',
        name: 'Some table text ',
        expires: 'Some table text ',
        date_joined: 'Some table text ',
        status: 'Active',
        action: ''
    },
    {
        enterprise_name: 'Some table text ',
        name: 'Some table text ',
        expires: 'Some table text ',
        date_joined: 'Some table text ',
        status: 'Active',
        action: ''
    },



]

type dataProps = {
    enterprise_name: string,
    name: string,
    institution: string,
    date_joined: string,
    status: string
}


const Box_5 = () => {
    const theme = useTheme();
    const [showData, setShowData] = useState<dataProps | any>([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [value, setValue] = useState('')
    const handleChange = (event: any) => setValue(event.target.value)


    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages
    } = usePagination({
        pagesCount: 6,
        initialState: { currentPage: 1 },
    });

    useEffect(() => {
        // handleNextClick()
    }, [])

    const handleNextClick = () => {
        setShowData(data.slice(currentIndex, currentIndex + 5))
        setCurrentIndex(prevState => prevState + 5)
    }

    const handlePrevClick = () => {
        if (currentIndex !== 0) {
            setShowData(data.slice(currentIndex - 5, currentIndex))
            setCurrentIndex(prevState => prevState - 5)
        }
    }


    return (
        <Box
            width='100%'
            height={674}
            bgColor={theme.colors.brand.white}
            borderRadius={7}
            border='1px solid #DFE6E9'
            mt={10}
            p={10}

        >
            <Flex
                justify='space-between'
            >
                <Box>
                    <Text
                        fontWeight={500}
                        color={theme.colors.brand.black}
                        fontSize={20}
                    >
                        Consultants
                    </Text>
                    <Text
                        fontWeight={300}
                        color={theme.colors.brand.yoda}
                        fontSize={16}
                        pt={2}
                    >
                        List of consultants available
                    </Text>
                </Box>
                <Flex
                    gap={5}
                >
                    <Select placeholder='Filter'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<AiOutlineUser color='gray.300' />}
                            />
                            <Input
                                onChange={handleChange}
                                width={200} type='text' placeholder='Search' />
                        </InputGroup>
                    </Stack>
                    <Box>
                        <CustomButton
                            buttonProps={{
                                mt: 0,
                                height: '40px',
                                bgColor: theme.colors.brand.white,
                                border: `1px solid ${theme.colors.brand.primary}`,
                                color: theme.colors.brand.primary,
                                _hover: {
                                    bgColor: theme.colors.brand.primary,
                                    border: `1px solid ${theme.colors.brand.white}`,
                                    color: theme.colors.brand.white,
                                }
                            }}
                            title="Change Consultant" />
                    </Box>

                </Flex>
            </Flex>
            <Box>
                <TableContainer mt={10}>
                    <Table variant='simple'>
                        <Thead
                            bgColor='rgba(247, 250, 252, 1)'
                        >
                            <Tr>
                                <Th></Th>
                                <Th>Enterprise Name</Th>
                                <Th>Name</Th>
                                <Th>Date Joined</Th>
                                <Th pl={20}>Status</Th>
                                <Th >Expires</Th>
                                <Th>Action</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data?.map((element: any, idx: any) => (
                                    <Tr fontSize={15} fontWeight={300} key={idx}>
                                        <Td>
                                            <Checkbox size='md' colorScheme='green' />
                                            
                                        </Td>
                                        <Td>{element?.enterprise_name}</Td>
                                        <Td>{element?.name}</Td>
                                        <Td>{element?.date_joined}</Td>
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
                                                                : element.status == 'Pending Approval'
                                                                    ? '#FFE7EA'
                                                                    : '#fff'
                                                    }
                                                    color={
                                                        element.status == 'Active'
                                                            ? '#00F7BF'
                                                            : element.status == 'Suspended'
                                                                ? '#FFD252'
                                                                : element.status == 'Pending Approval'
                                                                    ? '#FF0022'
                                                                    : '#fff'
                                                    }
                                                    borderRadius={10}
                                                    borderColor={
                                                        element.status == 'Active'
                                                            ? '#00F7BF'
                                                            : element.status == 'Suspended'
                                                                ? '#FFD252'
                                                                : element.status == 'Pending Approval'
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
                                        <Td>{element?.expires}</Td>
                                        <Td>
                                            <Icon as={BsChatFill} color={theme.colors.brand.primary} />
                                        </Td>


                                    </Tr>
                                ))
                            }

                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
            <Flex
                justify='flex-end'
                pt={10}
            >
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                >
                    <PaginationContainer>
                        <PaginationPrevious
                            onClick={handlePrevClick}

                        >
                            <Icon as={IoIosArrowBack} />
                        </PaginationPrevious>
                        <PaginationPageGroup>
                            {pages.map((page: number) => (
                                <PaginationPage
                                    key={`pagination_page_${page}`}
                                    page={page}
                                    w={10}
                                    h={10}
                                    bg="white"
                                    border='1px solid #DFE6E9'
                                    fontSize={14}
                                    fontWeight={400}
                                    _hover={{
                                        bg: "green.300",
                                        color: 'white'
                                    }}
                                    _current={{
                                        w: 10,
                                        h: 10,
                                        border: '1px solid #08A730',
                                        fontSize: 14,
                                        color: "#08A730",
                                        fontWeight: 400

                                    }}
                                />
                            ))}
                        </PaginationPageGroup>
                        <PaginationNext
                            onClick={handleNextClick}
                        >
                            <Icon as={IoIosArrowForward} />
                        </PaginationNext>
                    </PaginationContainer>
                </Pagination>
            </Flex>
        </Box>

    )
}

export default Box_5
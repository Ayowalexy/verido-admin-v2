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
import { getAllBusiness } from '../../services/network'
import TableSkeleton from '../Skelotons/Table.skeleton'
import BusinessTable from '../../../pages/business/business_owner_tables'


const Box_5 = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const allBusiness = async () => {
        setIsLoading(true)
        const res = await getAllBusiness();

        setData(res)
        setIsLoading(false)
    }
    useEffect(() => {
        allBusiness()
    }, [])
    
    return (
        <Box>
            {
                !isLoading
                ?
                <BusinessTable data={data} />
                :
                <TableSkeleton isLoading={isLoading} />

            }
        </Box>

    )
}

export default Box_5
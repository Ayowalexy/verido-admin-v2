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
import { AiOutlineUser } from 'react-icons/ai';
import ConsultantTable from "../../../pages/consultant/consultant_table";
import TableSkeleton from "../Skelotons/Table.skeleton";
import { getAllConsultants } from "../../services/network";

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
    InputRightElement
} from '@chakra-ui/react'
import Search from "../search";




type dataProps = {
    enterprise_name: string,
    name: string,
    institution: string,
    date_joined: string,
    status: string
}


const Box_4 = () => {
    const theme = useTheme();
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleGetAllConsultants = async () => {
        setIsLoading(true)
        const res = await getAllConsultants();
        setData(res)
        setIsLoading(false)
    }

    useEffect(() => {
        handleGetAllConsultants();
    }, [])


    return (


        <Box>
            {
                !isLoading
                    ?
                    <ConsultantTable data={data} />
                    :
                    <TableSkeleton isLoading={isLoading} />
            }
        </Box>


    )
}

export default Box_4
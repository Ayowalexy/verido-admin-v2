import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  Box,
  useTheme,
  Stack,
  Input,
  InputGroup,
  HStack,
  VStack
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import CSV from '../../public/components/csv';
import PDF from '../../public/components/pdf';
import { BiExport } from 'react-icons/bi'


function CustomTable({ columns, showExport, data = [] }) {

  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [tableHeader, setTableHead] = useState([]);
  const [tableBody, setTableBody] = useState([]);
  const router = useRouter()

  const {
    getTableProps,
    getHeaderProps,
    getTableBodyProps,
    headerGroups,
    flatHeaders,
    flatRows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    ...others
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }
    },
    usePagination
  )

  useEffect(() => {
    previousPage()
  }, [])

  const theme = useTheme();

  useEffect(() => {
    if (flatHeaders.length && flatRows.length) {
      const data = flatHeaders.map(ele => ele.Header)
      const data_ = flatRows.map(ele => ele.values).map(ele => [ele[data[0]], ele[data[1]], ele[data[2]], ele[data[3]], ele[data[4]]])
      setTableHead(data)
      setTableBody(data_)
    }
  }, [flatHeaders])
  return (
    <Box
      width='100%'
      height={656}
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
            {showExport ? 'All Verido users' : 'Business Owners'}
          </Text>
          <Text
            fontWeight={300}
            color={theme.colors.brand.yoda}
            fontSize={16}
            pt={2}
          >
            {showExport ? 'List of all business, partner and consultant account' : 'List of business owners available'}
          </Text>
        </Box>
        <Flex
          gap={5}
        >
          {showExport && (
            <HStack spacing={5} mt={-5}>
              <HStack cursor='pointer' border='1px solid black' padding={'5px 20px'} borderRadius={10}>
                <BiExport />
                <CSV data={data} />
              </HStack>
              <HStack cursor='pointer' border='1px solid black' padding={'5px 20px'} borderRadius={10}>
                <BiExport />
                <PDF header={tableHeader} body={tableBody} data={data} />
              </HStack>
            </HStack>
          )}
          <Select placeholder='Filter'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Stack spacing={4}>
            <InputGroup>
              {/* <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineUser color='gray.300' />}
              /> */}
              <Input
                // onChange={handleChange}
                width={200} type='text' placeholder='Search' />
            </InputGroup>
          </Stack>
        </Flex>
      </Flex>

      <>
        {
          data?.length
            ?
            (
              <>
                <Table mt={10} {...getTableProps()}>
                  <Thead>
                    {headerGroups.map((headerGroup, idx) => (
                      <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.filter(e => e.Header !== 'ID').map((column, idx) => {
                          return (
                            <Th
                              key={idx}
                              textAlign='center'
                              fontWeight={400}
                              fontSize={14}
                              textTransform='capitalize'
                              {...column.getHeaderProps()}>{column.render("Header")}
                            </Th>
                          )
                        })}
                      </Tr>
                    ))}
                  </Thead>
                  <Tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                      prepareRow(row);
                      return (
                        <Tr
                          key={i}
                          {...row.getRowProps()}>
                          {row.cells.map((cell, id) => {
                            return (
                              <Td
                                key={id}
                                {...cell.getCellProps()}
                                textAlign='center'
                                fontSize={14}
                                textTransform='capitalize'>
                                <Flex
                                  onClick={() => {
                                    if (cell.column.Header == 'ID') {
                                      router.push(`/business/${cell.value}`)
                                    }
                                  }}
                                  cursor='pointer'
                                  justify='center'
                                  align='center'
                                >
                                  <Box
                                    border='1px solid black'
                                    width='100%'
                                    fontWeight={300}
                                    p='10px 20px'
                                    bgColor={
                                      cell.value == 'trial'
                                        ? '#EAFFF8'
                                        : cell.value == 'Subscribed'
                                          ? '#FFF9E9'
                                          : cell.value == 'expired'
                                            ? '#FFE7EA'
                                            : '#fff'
                                    }
                                    color={
                                      cell.value == 'trial'
                                        ? '#00F7BF'
                                        : cell.value == 'Subscribed'
                                          ? '#FFD252'
                                          : cell.value == 'expired'
                                            ? '#FF0022'
                                            : '#2D3436'
                                    }
                                    borderRadius={10}
                                    borderColor={
                                      cell.value == 'trial'
                                        ? '#EAFFF8'
                                        : cell.value == 'Subscribed'
                                          ? '#FFF9E9'
                                          : cell.value == 'expired'
                                            ? '#FFE7EA'
                                            : '#fff'
                                    }
                                    borderWidth={1}
                                    borderStyle='solid'
                                  >
                                    {cell.column.Header === 'ID' && showExport
                                      ? null
                                      :
                                      <>
                                        {cell.column.Header !== 'ID' ? cell.render('Cell') : 'View'}
                                      </>
                                    }

                                  </Box>
                                </Flex>
                              </Td>
                            );
                          })}
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Flex justifyContent="flex-end" m={4} pb={10} alignItems="center">
                  <Flex
                    mr={2}
                  >
                    <Tooltip label="Previous Page">
                      <IconButton
                        onClick={previousPage}
                        isDisabled={!canPreviousPage}
                        icon={<ChevronLeftIcon h={6} w={6} />}
                      />
                    </Tooltip>
                  </Flex>

                  <Flex gap={2} alignItems="center">
                    {Array(pageSize.length > 10 ? 10 : pageSize.length).fill(1).map((_, idx) => (
                      <Flex
                        w={10}
                        h={10}
                        gap={2}
                        key={idx}
                        bg="white"
                        borderRadius={10}
                        justify='center'
                        align='center'
                        onClick={() => gotoPage(pageIndex)}
                        color={idx == pageIndex
                          ? "#fff"
                          : "#000"
                        }
                        border={idx == pageIndex
                          ? '1px solid #08A730'
                          : '1px solid #DFE6E9'
                        }
                        bgColor={idx == pageIndex
                          ? '#08A730'
                          : '#DFE6E9'
                        }
                        fontSize={14}
                        fontWeight={400}
                        _hover={{
                          bg: "green.300",
                          color: 'white'
                        }}

                      >
                        <Text fontSize={14}>
                          {idx + 1}
                        </Text>
                      </Flex>
                    ))}

                  </Flex>
                  <Flex
                    ml={2}
                  >
                    <Tooltip label="Next Page">
                      <IconButton
                        onClick={nextPage}
                        isDisabled={!canNextPage}
                        icon={<ChevronRightIcon h={6} w={6} />}
                      />
                    </Tooltip>

                  </Flex>
                </Flex>
              </>
            ) :
            (
              <Flex justify='center'
                align='center'
                height='100%'
                width='100%'
              >
                <Image src="/imgs/svgs/empty.svg" width={200} height={200} />
              </Flex>
            )
        }

      </>
    </Box>
  );
}



function BusinessOwnerTable({ data, showExport }) {
  const columns = React.useMemo(
    () => [


      {
        Header: "Full name",
        accessor: a => (
          a.full_name
            ? a.full_name
            : a.username
              ? a.username
              : 'No name'
        )
      },
      {
        Header: "Mobile Number",
        accessor: a => (
          a.mobile_number
            ? a.mobile_number
            : a.phone_number
              ? a.phone_number
              : 'No Phone number'
        )
      },
      {
        Header: "Account type",
        accessor: a => (
          a.account_type
            ? a.account_type.concat(' Account')
            : a.hasOwnProperty('rating')
              ? 'Consultant Account'
              : 'Business Account'
        )
      },
      {
        Header: "Date Joined",
        accessor: a => (
          a.dateJoined
            ? new Date(a.dateJoined).toLocaleDateString()
            : a.createdAt
              ? new Date(a.createdAt).toLocaleDateString()
              : new Date().toLocaleDateString()
        )
      },
      {
        Header: "email",
        accessor: "email"
      },
      {
        Header: "ID",
        accessor: "_id"
      },

    ],

    []
  );

  console.log('dattaaaa', data)

  return <CustomTable columns={columns} showExport={showExport} data={data} />;
}


export default BusinessOwnerTable;

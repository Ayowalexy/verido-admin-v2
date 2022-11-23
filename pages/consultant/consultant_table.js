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
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import TableSkeleton from "../../public/components/Skelotons/Table.skeleton";

function CustomTable({ columns, data = [] }) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
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
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }
    },
    usePagination
  )




  const theme = useTheme();
  return (
    <Box
      width='100%'
      height={526}
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
              <Input
                // onChange={handleChange}
                width={200} type='text' placeholder='Search' />
            </InputGroup>
          </Stack>
        </Flex>
      </Flex>

      {
        !isLoading
          ?
          (
            <>

              {
                data?.length
                  ?
                  (
                    <Table {...getTableProps()}>
                      <Thead
                        textAlign='center'
                      >
                        {headerGroups.map((headerGroup, idx) => (
                          <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.filter(e => e.Header !== 'ID' && e.Header !== 'Status').map((column, id_) => (
                              <Th
                                key={id_}
                                textAlign='center'
                                fontWeight={400}
                                fontSize={14}
                                textTransform='capitalize'
                                {...column.getHeaderProps()}>{column.render("Header")}
                              </Th>
                            ))}
                          </Tr>
                        ))}
                      </Thead>
                      <Tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                          prepareRow(row);
                          return (
                            <Tr key={i} {...row.getRowProps()}>
                              {row.cells.map((cell, id) => {
                                return (
                                  <Td
                                    key={id}
                                    onClick={() => {
                                      if (cell.column.Header == 'ID') {
                                        router.push(`/consultant/${cell.value}`)
                                      }
                                    }}
                                    {...cell.getCellProps()}>
                                    <Flex
                                      cursor='pointer'
                                      justify='center'
                                      align='center'
                                    >
                                      <Box
                                        fontWeight={300}
                                        p='10px 20px'
                                        bgColor={
                                          cell.value == true
                                            ? '#EAFFF8'
                                            : cell.value == 'Suspended'
                                              ? '#FFF9E9'
                                              : cell.value == 'Pending Approval'
                                                ? '#FFE7EA'
                                                : '#fff'
                                        }
                                        color={
                                          cell.value == 'Active'
                                            ? '#00F7BF'
                                            : cell.value == 'Suspended'
                                              ? '#FFD252'
                                              : cell.value == 'Pending Approval'
                                                ? '#FF0022'
                                                : '#2D3436'
                                        }
                                        borderRadius={10}
                                        borderColor={
                                          cell.value == 'Active'
                                            ? '#00F7BF'
                                            : cell.value == 'Suspended'
                                              ? '#FFD252'
                                              : cell.value == 'Pending Approval'
                                                ? '#FF0022'
                                                : '#fff'
                                        }
                                        borderWidth={1}
                                        borderStyle='solid'
                                      >
                                        {cell.column.Header !== 'ID' ? cell.render('Cell') : 'View'}
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

                  )
                  :
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

              {
                data?.length
                  ?
                  (
                    <Flex justifyContent="flex-end" m={4} alignItems="center">
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
                        {Array(pageOptions.length).fill(1).map((_, idx) => (
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
                  )
                  : null
              }
            </>
          )
          :
          (
            <TableSkeleton />
          )
      }
    </Box>
  );
}


function ConsultantTable({ data }) {

  const columns = React.useMemo(
    () => [


      {
        Header: "Consultant ID",
        accessor: "user_id"

      },
      {
        Header: "Full name",
        accessor: "username"
      },
      {
        Header: "Partner",
        accessor: a => {
          return (
            a?.partner?.full_name
              ? a.partner.full_name
              : 'No Partner'
          )
        }
      },
      {
        Header: "Number of Business",
        accessor: a => {
          return (
            a?.business?.length
              ? a.business.length
              : 0
          )
        }
      },
      {
        Header: "Date Joined",
        accessor: a => {
          return (
            a?.createdAt
              ? new Date(a.createdAt).toLocaleDateString()
              : 'No Partner'
          )
        }
      },
      {
        Header: "Status",
        accessor: "view"
      },
      {
        Header: "ID",
        accessor: "_id"
      },

    ],

    []
  );

  return <CustomTable columns={columns} data={data} />;
}

export default ConsultantTable;

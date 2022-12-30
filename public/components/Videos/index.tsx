import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  useTheme,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import AddVidoeModal from "./VideoModal";
import { getAllVideos } from "../../services/network";
import { useState, useEffect } from "react";

const Videos = () => {
  const theme = useTheme();
  const [open, setIsOpen] = useState<boolean>(false);
  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getAllVideos();
      if (Array.isArray(res)) {
        setVideos(res);
      }
    })();
  }, []);

  return (
    <Box
      width="100%"
      height={526}
      bgColor={theme.colors.brand.white}
      borderRadius={7}
      border="1px solid #DFE6E9"
      mt={10}
      p={10}
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Vidoe ID</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Boolean(videos?.length) ? (
              <>
                {videos?.map((ele: any) => (
                  <Tr>
                    <Td>{ele.vidoeID}</Td>
                    <Td>{ele.title}</Td>
                    <Td>{ele.category}</Td>
                    <Td>
                        <HStack justify='center' align='center' gap='10px'>
                            <Button colorScheme='cyan'>
                                Edit
                            </Button>
                            <Button colorScheme='red'>
                                Delete
                            </Button>
                        </HStack>
                    </Td>
                  </Tr>
                ))}
              </>
            ) : (
              <Text width="100%" pt="30px">
                No Vidoe has been added
              </Text>
            )}
          </Tbody>
          <Tfoot>
            <Button
              colorScheme="blue"
              mt="40px"
              onClick={() => setIsOpen(!open)}
            >
              Add Video
            </Button>
          </Tfoot>
        </Table>
      </TableContainer>
      <AddVidoeModal open={open} setIsOpen={setIsOpen} setVideos={setVideos} />
    </Box>
  );
};

export default Videos;

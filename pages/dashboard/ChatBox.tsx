import { HStack, VStack, Text } from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";

interface boxProps {
  _id: string;
  email: string;
  full_name: string;
  onClick?: () => null
}

const ChartBox = ({ _id, email, full_name, onClick }: boxProps) => {
  return (
    <HStack
    cursor='pointer'
      onClick={onClick}
      height="88px"
      paddingLeft={"20px"}
      paddingRight={"20px"}
      backgroundColor="#fff"
      border="1px solid #DFE6E9"
      key={_id}
      justify="space-between"
      width={"278px"}
      marginLeft="-17px"
    >
      <HStack>
        <VStack
          height={"50px"}
          width="50px"
          borderRadius={"50%"}
          justify="center"
          align="center"
          backgroundColor={"#EBFAFA"}
        >
          <IoPersonOutline size={20} stroke="#08A730" />
        </VStack>
        <VStack justify="flex-start" align="flex-start">
          <Text
            color="#2D3436"
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="14px"
          >
            {full_name}
          </Text>
          <Text
            color="#636E72"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="12px"
          >
            {email}
          </Text>
        </VStack>
      </HStack>
      <Text
        color="#636E72"
        fontFamily="Manrope"
        fontWeight="400"
        fontSize="12px"
        alignSelf="flex-start"
      >
        3m
      </Text>
    </HStack>
  );
};

export default ChartBox;

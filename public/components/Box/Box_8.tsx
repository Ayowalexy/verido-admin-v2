import { Box, Flex, Text, useTheme, VStack } from "@chakra-ui/react";
import MoneyIn from "../../../pages/dashboard/chats/money_in";
// import Labour from '../../../pages/dashboard/chats/labour';
// import Material from '../../../pages/dashboard/chats/material';
import { formatNumber } from "../../utils/formatter";

type dataProps = {
  amount: string;
  name: string;
};

type dataProps_ = {
  data: object | any;
  name?: string;
};

const Box_8 = ({ data }: dataProps_) => {
  const theme = useTheme();

  const Card = ({ amount, name }: dataProps) => (
    <Flex
      justify="center"
      align="center"
      width="23%"
      gap={7}
      height={126}
      bgColor={theme.colors.brand.white}
      borderRadius={7}
      border="1px solid #DFE6E9"
    >
      <Box>
        <MoneyIn />
      </Box>
      <VStack>
        <Text fontWeight={400} fontSize={24}>
          ${formatNumber(amount) || 0.00}
        </Text>
        <Text color="#636E72" fontWeight={300} fontSize={14}>
          {name}
        </Text>
      </VStack>
    </Flex>
  );
  return (
    <Flex
      width="100%"
      height={466}
      borderRadius={7}
      mt={10}
      gap={7}
      flexWrap="wrap"
      // justify='space-between'
    >
      <Card amount={data?.moneyin} name={"Money In"} />
      <Card amount={data?.overhead} name={"Overhead" } />
      <Card amount={data?.direct_labour} name={"Direct Labour"} />
      <Card amount={data?.direct_materials} name={"Direct Materials"} />
      {/* <Labour />
            <Material /> */}
    </Flex>
  );
};

export default Box_8;

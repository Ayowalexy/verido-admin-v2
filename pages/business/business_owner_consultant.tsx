import { Box, Text, Flex, useTheme, HStack, VStack } from "@chakra-ui/react";
import ConsultantAvatar from "../../public/imgs/svgs/consultant.svg";
import CustomButton from "../../public/components/button";
import BusinessChart from "./business_chart";
import { useState, useEffect } from "react";
import {
  getAllConsultants,
  addConsultant,
} from "../../public/services/network";
import ConsultantModal from "./consultant_modal";

type dataProps = {
  name?: string;
  id?: string;
  enterprise_name?: string;
  moneyin?: MoneyInProps;
  moneyout?: MoneyOutProps;
  overhead?: overheadProps;
};

type MoneyInProps = {
  totalMoneyIn?: number;
  percent?: number;
}

type MoneyOutProps = {
  totalMoneyIn?: number;
  percent?: number;
}

type overheadProps = {
  totalMoneyIn?: number;
  percent?: number;
}

const BusinessOwnerConsultant = ({ name, id, enterprise_name, moneyin, moneyout, overhead }: dataProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex width="100%" height={424} gap={10} mt={7} justify="space-between">
      <Flex
        flexBasis="65%"
        bgColor={theme.colors.brand.white}
        borderRadius={7}
        p={5}
        border="1px solid #DFE6E9"
        align="center"
      >
        <ConsultantAvatar />
        <Box pl={5} alignSelf="flex-start">
          {name && id ? (
            <>
              <Text fontWeight={400} fontSize={24}>
                {id}
              </Text>
              <Text pt={70} fontWeight={500} fontSize={32}>
                {enterprise_name}
              </Text>
              <VStack align="flex-start">
                <Text
                  fontSize={12}
                  fontWeight={300}
                  pt={3}
                  mb={-6}
                  color={theme.colors.brand.yoda}
                >
                  Owned by
                </Text>
                <Text fontSize={14} fontWeight={400} pt={3}>
                  {name}
                </Text>
              </VStack>
            </>
          ) : (
            <Text pt={70} fontWeight={500} fontSize={25}>
              No Consultant
            </Text>
          )}
          <CustomButton
            title="Assign/Change"
            buttonProps={{
              borderRadius: 40,
              width: 160,
              onClick: () => {
                setOpen(true);
              },
            }}
          />
        </Box>
      </Flex>
      <VStack flexBasis="35%" borderRadius={7} gap={5}>
        <BusinessChart type="Money in" percentage={moneyin?.percent} amount={moneyin?.totalMoneyIn} />
        <BusinessChart type="Money out" percentage={moneyout?.percent} amount={moneyout?.totalMoneyIn} />
        <BusinessChart type="Overhead" percentage={overhead?.percent} amount={overhead?.totalMoneyIn} />
      </VStack>
      <ConsultantModal open={open} setOpen={setOpen} />
    </Flex>
  );
};

export default BusinessOwnerConsultant;

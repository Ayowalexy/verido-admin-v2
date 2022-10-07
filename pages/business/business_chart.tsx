import {
  Flex,
  Text,
  Box,
  VStack,
  Icon,
  useTheme,
  HStack,
} from "@chakra-ui/react";
import { data, data_2, data_3 } from "./chart";
import { FiArrowUpRight } from "react-icons/fi";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatNumber } from "../../public/utils/formatter";

type businessChartProps = {
  type: string;
  amount: number | undefined;
  percentage: number | undefined;
};

const BusinessChart = ({ type, amount, percentage }: businessChartProps) => {
  const theme = useTheme();
  return (
    <Flex
      width="100%"
      height={120}
      border="1px solid #DFE6E9"
      bgColor={theme.colors.brand.white}
      borderRadius={15}
      align="center"
      pl={5}
      pr={5}
    >
      <Box flexBasis="70%">
        <Text fontWeight={500} fontSize={17} pt={5}>
          {type}
        </Text>
        <LineChart
          width={200}
          height={80}
          data={
            type === "Money in"
              ? data
              : type === "Money out"
              ? data_2
              : type === "Overhead"
              ? data_3
              : data
          }
        >
          <Line
            type="monotone"
            dataKey="pv"
            stroke={
              type == "Money out"
                ? theme.colors.brand.danger
                : theme.colors.brand.primary
            }
            strokeWidth={2}
          />
        </LineChart>
      </Box>
      <Flex
        h={88}
        justify="center"
        align="flex-end"
        flexDir="column"
        borderRadius={10}
        w={126}
        pr={2}
        borderLeft={`3px solid ${theme.colors.brand.primary}`}
        bgColor={
          type == "Money out"
            ? theme.colors.brand.danger_faded
            : theme.colors.brand.primary_faded
        }
      >
        <Text fontSize={22} fontWeight={500}>
          ${formatNumber(amount)}
        </Text>
        <HStack>
          <Icon
            as={FiArrowUpRight}
            color={
              type == "Money out"
                ? theme.colors.brand.danger
                : theme.colors.brand.primary
            }
          />
          <Text
            color={
              type == "Money out"
                ? theme.colors.brand.danger
                : theme.colors.brand.primary
            }
            fontSize={16}
            fontWeight={400}
          >
            {percentage}%
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default BusinessChart;

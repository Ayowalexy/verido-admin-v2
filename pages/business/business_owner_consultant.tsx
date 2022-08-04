import {
    Box,
    Text,
    Flex,
    useTheme,
    HStack,
    VStack
} from '@chakra-ui/react';
import ConsultantAvatar from '../../public/imgs/svgs/consultant.svg'
import CustomButton from '../../public/components/button';
import BusinessChart from './business_chart';


const BusinessOwnerConsultant = () => {
    const theme = useTheme();
    return (
        <Flex
            width='100%'
            height={424}
            gap={10}
            mt={7}
            justify='space-between'
        >
            <Flex
                flexBasis='65%'
                bgColor={theme.colors.brand.white}
                borderRadius={7}
                p={5}
                border='1px solid #DFE6E9'
                align='center'
            >
                <ConsultantAvatar />
                <Box
                    pl={5}
                    alignSelf='flex-start'>
                    <Text
                        fontWeight={400}
                        fontSize={24}
                    >
                        Consultant
                    </Text>
                    <Text
                        pt={70}
                        fontWeight={500}
                        fontSize={32}
                    >Enterprise Name</Text>
                    <VStack
                        align='flex-start'
                    >
                        <Text
                            fontSize={12}
                            fontWeight={300}
                            pt={3}
                            mb={-6}
                            color={theme.colors.brand.yoda}
                        >Owned by</Text>
                        <Text
                            fontSize={14}
                            fontWeight={400}
                            pt={3}
                        >Daniel Malbrook</Text>
                    </VStack>
                    <CustomButton
                        title='Assign/Change'
                        buttonProps={{
                            borderRadius: 40,
                            width: 160
                        }}
                    />


                </Box>

            </Flex>
            <VStack
                flexBasis='35%'
                borderRadius={7}
                gap={5}
            >
                <BusinessChart
                    type='Money in'
                    percentage='23%'
                    amount='12333'
                />
                <BusinessChart
                    type='Money out'
                    percentage='23%'
                    amount='12333'
                />
                <BusinessChart
                    type='Overhead'
                    percentage='23%'
                    amount='12333'
                />

            </VStack>

        </Flex>
    )
}

export default BusinessOwnerConsultant
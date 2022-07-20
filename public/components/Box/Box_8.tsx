import {
    Box,
    Flex,
    Text,
    useTheme,
    VStack
} from '@chakra-ui/react';
import MoneyIn from '../../../pages/dashboard/chats/money_in';
// import Labour from '../../../pages/dashboard/chats/labour';
// import Material from '../../../pages/dashboard/chats/material';


const Box_8 = () => {
    const theme = useTheme();

    const Card = () => (
        <Flex
            justify='center'
            align='center'
            width='23%'
            gap={7}
            height={126}
            bgColor={theme.colors.brand.white}
            borderRadius={7}
            border='1px solid #DFE6E9'
        >
            <Box>
                <MoneyIn />
            </Box>
            <VStack
            >
                <Text
                    fontWeight={400}
                    fontSize={24}
                >$1,346.00</Text>
                <Text
                    color='#636E72'
                    fontWeight={300}
                    fontSize={14}
                >Direct labour</Text>
            </VStack>
        </Flex>
    )
    return (
        <Flex
            width='100%'
            height={466}
            borderRadius={7}
            mt={10}
            gap={7}
            flexWrap='wrap'
            // justify='space-between'
        >

            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Labour />
            <Material /> */}
        </Flex>
    )
}

export default Box_8
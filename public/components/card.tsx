import {
    Flex,
    Box,
    useTheme,
    Text
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { formatNumber } from '../utils/formatter'

type CardProps = {
    number: string,
    card_type: string,
    children?: ReactNode
}

const Card = ({
    number, card_type, children
}: CardProps ) => {
    const theme = useTheme();
    const { colors: { brand: { black, primary_faded, white } } } = theme;

    return (
        <Flex
            width='25%'
            // justify='center'
            align='center'
            bgColor={white}
            height='200px'
            borderRadius={20}
            flexDir='column'
            justifyContent='space-around'

        >
            <Flex
                // p={10}
                bgColor={
                    card_type?.includes('Subscribers')
                    ? 'rgba(255, 249, 233, 1)'
                    : card_type?.includes('Active')
                    ? 'rgba(253, 239, 252, 1)'
                    : primary_faded
                }
                borderRadius={20}
                width='80%'
                height='96px'
                mt={2}
                justify='center'
                align='center'
            >
                {children}
            </Flex>
            <Text
                fontWeight={400}
                fontSize={28}
                color={black}
            >
                {number}
            </Text>
            <Text
                fontWeight={300}
                fontSize={14}
                color={black}
            >
                {card_type}
            </Text>
        </Flex>
    )
}

export default Card
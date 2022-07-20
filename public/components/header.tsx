import {
    Box,
    Text,
    Flex,
    useTheme,
    Icon,
    Avatar,
    HStack
} from '@chakra-ui/react';
import Document from '../imgs/svgs/document.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscBellDot } from 'react-icons/vsc'


const Header = () => {
    const theme = useTheme();
    const { colors: { brand: { primary, black, yoda, white } } } = theme;
    return (
        <Flex
            bgColor={white}
            borderRadius={10}
            p={4}
            mt={5}
            justify='space-between'
            align='center'
        >
            <Flex gap={4}>
                <Document />
                <HStack>
                    <Text
                        color={yoda}
                        fontSize={14}
                    >
                        Do you know the latest update of 2021? 🎉
                    </Text>
                    <Text
                         color={primary}
                         fontSize={14}
                    >
                        Our roadmap is alive for future updates.
                    </Text>
                </HStack>
            </Flex>
            <Flex
                justify='center'
                align='center'
                gap={3}
            >
                <Icon
                    h={6}
                    w={6}
                    as={AiOutlineSearch}
                />
                <Icon
                    h={6}
                    w={6}
                    as={VscBellDot}
                />
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

            </Flex>
        </Flex>
    )
}

export default Header
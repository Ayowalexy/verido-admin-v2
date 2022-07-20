import {
    List,
    ListItem,
    ListIcon,
    Box,
    Text,
    Icon,
    useTheme
} from '@chakra-ui/react';
import admin_navigation from './admin'
import Logo from '../imgs/svgs/verido_logo.svg'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';

type NavigationProps = {
    activeElement: string
}


const Navigation = ({activeElement}: NavigationProps) => {
    const theme = useTheme();
    const router = useRouter();
    const { colors: { brand: { primary, black, primary_faded, text, white } } } = theme;

    return (
        <Box
            pos='relative'
        >
            <Box
                pos='fixed'
                width='20%'
                height='100vh'
                overflow='scroll'
                p={30}
                bgColor={white}
            >
                <Image
                    src='/imgs/svgs/verido_logo.svg'
                    width={150}
                    height={40}
                />
                <Text
                    pt={70}
                    pb={25}
                    color={black}
                >MAIN</Text>
                <List
                    spacing={3}
                >
                    {
                        admin_navigation.map((element, idx) => (
                            <ListItem
                                fontSize={16}
                                fontWeight={300}
                                color={activeElement == element.label ? primary : text}
                                bgColor={activeElement == element.label ? primary_faded : white}
                                borderRadius={10}
                                cursor='pointer'
                                transition='all ease 500ms'
                                padding='14px 13px'
                                onClick={() => {
                                    router.push(element.link)
                                }}
                                key={idx}>
                                <ListIcon w={25} h={25} as={element.icon} color={activeElement == element.label ? primary : text} />
                                {element.label}
                            </ListItem>
                        ))
                    }

                </List>
            </Box>
        </Box>
    )
}

export default Navigation
import {
    Box,
    Flex,
    useTheme
} from '@chakra-ui/react';
import Navigation from '../../public/components/navigation';
import Header from '../../public/components/header';
import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode,
    active: string
}


const Layout = (
    { active, children }: LayoutProps
): JSX.Element => {
    const theme = useTheme();
    return (
        <Box
            flexWrap='wrap'
            gap={10}
        >
            <Navigation activeElement={active} />
            <Flex
                float='right'
                bgColor={theme.colors.brand.bgColor}
                width='80%'
                justify='center'
                align='center'
            >
                <Box
                    width='96%'
                >
                    <Header />
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default Layout

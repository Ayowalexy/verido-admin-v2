import {
    Box,
    Flex,
    Text,
    useTheme,
    Link
} from '@chakra-ui/react'
import LOGO from '../../public/imgs/svgs/verido_logo.svg'
import HERO_1 from '../../public/imgs/svgs/hero_1.svg'

type LayoutProps = {
    children: JSX.Element
}

const AuthLayout = ({
    children
}: LayoutProps): JSX.Element => {
    const theme = useTheme()
    return (
        <Flex
            width='100%'
        >
            <Box
                width='100%'
                height='100vh'
                bg={theme.colors.brand.bg}
            >
                <Flex
                    flexDir='column'
                    p={30}
                    justify='center'
                    align='center'
                >
                    <Box
                        alignSelf='flex-start'
                    >
                        <Box>
                            <LOGO />
                        </Box>
                    </Box>
                    <Box>
                        <HERO_1 />
                    </Box>
                    <Box
                        mt={-100}
                    >
                        <Text
                            textAlign='center'
                            fontWeight={500}
                            fontSize={28}
                            color={theme.colors.brand.primary}
                        >
                            Very good works are  waiting for you 🤞
                        </Text>
                        <Text
                            fontWeight={400}
                            color={theme.colors.brand.yoda}
                            width={500}
                            textAlign='center'
                        >
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry standard dummy text ever.
                        </Text>
                    </Box>
                </Flex>


            </Box>
            <Box
                width='100%'
                height='100vh'
                bg={theme.colors.brand.white}
            >
                <Flex
                    width='100%'
                    height='100vh'
                    justify='center'
                    align='center'
                >
                    <Flex
                        flexDir='column'
                    >
                        <>
                            {children}
                            <>
                                <Flex
                                    fontSize={14}
                                    color={theme.colors.brand.yoda}
                                    mt={10}
                                    gap={3}
                                >
                                    <Link>
                                        Privacy
                                    </Link>
                                    <Text>•</Text>
                                    <Link>
                                        Terms of Use
                                    </Link>
                                </Flex>
                            </>
                        </>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default AuthLayout
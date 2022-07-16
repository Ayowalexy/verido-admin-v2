import {
    Box,
    Text,
    Flex,
    useTheme,
    ButtonProps,
    useToast,
    Button
} from '@chakra-ui/react';
import GoogleIcon from '../../public/imgs/svgs/google.svg'
// import { GoogleLogin } from 'react-google-login';
import FacebookIcon from '../../public/imgs/svgs/facebook.svg'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { signInWithGooglePopup, signInWithFacebookPopup } from '../utils/firebase'
import { useMutation } from 'react-query';
import { reset, socials } from '../services/network'
import { useRouter } from 'next/router';

type SocialButtonProps = {
    children: JSX.Element
}

export const Google = () => {
    const theme = useTheme();
    const toast = useToast();
    const router = useRouter();

    const { isLoading, mutate } = useMutation(socials, {
        onSuccess: data => {
            console.log('status', data?.data)
            if (data?.status == 200 || data?.status == 201) {
                toast({
                    title: "Login",
                    description: "Login successful",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })

                router.push('/')
            }
        }
    })

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        const data = {
            full_name: response?.user?.displayName,
            email: response?.user?.email,
            phone_number: response?.user?.phoneNumber,
            password: response?.user?.uid

        }
        console.log(response)
        mutate(data)
    };
    return (
        <Button
            bgColor={theme.colors.brand.white}
            width={360}
            isLoading={isLoading}
            height='48px'
            fontSize={14}
            mt={5}
            border='1px solid #B2BEC3'
            borderRadius={7}
            onClick={signInWithGoogle}
            color={theme.colors.brand.white}
            fontWeight={400}
            gap={5}
            _hover={{
                color: '#fff',
                bgColor: theme.colors.brand.primary
            }}
        >
            <GoogleIcon />
            <Text
                color={theme.colors.socials.primary}
                fontSize={14}
            >
                Continue with Google account
            </Text>
        </Button>



    )
}

export const FacebookLogin = () => {
    const theme = useTheme();
    const toast = useToast();
    const router = useRouter();

    const { isLoading, mutate } = useMutation(socials, {
        onSuccess: data => {
            console.log('status', data?.data)
            if (data?.status == 200 || data?.status == 201) {
                toast({
                    title: "Login",
                    description: "Login successful",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })

                router.push('/')
            }
        }
    })

    const signInWithFacebook = async () => {
        const response = await signInWithFacebookPopup();
        // const data = {
        //     full_name: response?.user?.displayName,
        //     email: response?.user?.email,
        //     phone_number: response?.user?.phoneNumber,
        //     password: response?.user?.uid

        // }
        console.log(response)
        // mutate(data)
    };
    return (

        <Button
            bgColor={theme.colors.brand.white}
            width={360}
            isLoading={isLoading}
            height='48px'
            fontSize={14}
            mt={5}
            border='1px solid #B2BEC3'
            borderRadius={7}
            onClick={signInWithFacebook}
            color={theme.colors.brand.white}
            fontWeight={400}
            gap={5}
            _hover={{
                color: '#fff',
                bgColor: theme.colors.brand.primary
            }}
        >

            <FacebookIcon />
            <Text
                color={theme.colors.socials.primary}
                fontSize={14}
            >
                Continue with Facebook account
            </Text>

        </Button>
    )
}

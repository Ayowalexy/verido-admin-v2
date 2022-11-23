import {
    Text,
    useTheme,
    Flex,
    Checkbox,
    Link,
    Box,
    Divider,
    useToast
} from '@chakra-ui/react'
import FormInput from "../../public/components/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import AuthLayout from './layout';
import { useState } from 'react';
import NextLink from 'next/link';
import { Google } from '../../public/components/social';
import CustomButton from '../../public/components/button';
import { FacebookLogin } from '../../public/components/social';
import { useMutation } from 'react-query';
import { login } from '../../public/services/network';
import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react';
import { UserRoleContext } from '../../public/context/user.context';
import { useAppContext } from '../../public/context/app.context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Please, enter your email'),
    password: Yup.string().required('Password required')
})

const Login = () => {
    const theme = useTheme();
    const toast = useToast();
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const { colors: { brand: { primary, black, yoda } } } = theme;
    const { setUserRole, setUserId } = useContext(UserRoleContext);
    const { setUser } = useAppContext();

    const { isLoading , mutate} = useMutation(login, {
        onSuccess: async (data: any) => {
            console.log('data', data?.data)
            if(data?.status == 200 || data?.status ==  201){
                await AsyncStorage.setItem("userDetails", JSON.stringify({token: data?.data?.token}))
                const accountType = data?.data?.role;
                const id = data?.data?.user?._id;
                await AsyncStorage.setItem('currentUser', JSON.stringify(data?.data?.user))
                setUserId(id);
                setUserRole(accountType);
                await AsyncStorage.setItem('accountType', accountType)
                toast({
                    title: "Login",
                    description: "Login successful",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })

                router.push('/admin')
            } else if(data?.response?.data?.status == 403) {
                toast({
                    title: "Error",
                    description: data?.response?.data?.meta?.response,
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })
            }
        }
    })

    const {
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        touched,
        isSubmitting
    } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values: any) => {
            console.log('values', values)
            mutate(values)
        }
    })

    return (
        <AuthLayout>
            <>
                <Text
                    color={black}
                    fontSize={42}
                    fontWeight={500}
                >
                    Login🖐🏻
                </Text>
                <Text
                    color={yoda}
                    fontSize={14}
                    fontWeight={400}
                    width={300}
                    textAlign='center'
                >
                    Welcome back, please login to your account.
                </Text>
                <FormInput
                    label='Email'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'email',
                        id: 'email',
                        isInvalid:
                            !!errors.email && touched.email,

                    }}
                    errorMessage={errors.email}
                />
                <FormInput
                    label='Password'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'password',
                        id: 'password',
                        isInvalid:
                            !!errors.password && touched.password,

                    }}
                    errorMessage={errors.password}

                />
                <Flex
                    justify='space-between'
                    align='center'
                    pt={2}
                >
                    <Checkbox
                        isChecked={checked}
                        onChange={() => setChecked(!checked)}
                        fontSize={14}
                        fontWeight={500}
                        color="#2D3436"
                        colorScheme='green'
                        // colorScheme={primary}
                    >
                        Remember me
                    </Checkbox>
                    <NextLink href='#'>
                        <Link
                            color={yoda}
                            fontSize={14}
                        >
                            Forgot Password?
                        </Link>
                    </NextLink>
                </Flex>
                <CustomButton
                    title='Login'
                    buttonProps={{
                        onClick: () => {
                            handleSubmit()
                        },
                        isLoading
                    }}
                />
                <Text
                    pt={3}
                    fontWeight={600}
                    color={yoda}
                    fontSize={12}
                >
                    Don&apos;t have an account? {' '}
                    <NextLink
                        href='/auth/create_account'>
                        <Link
                            textDecoration='none'
                            color={primary}
                        >
                            Create an account
                        </Link>
                    </NextLink>

                </Text>

                <Flex
                    justify='center'
                    align='center'
                    gap={3}
                    pt={5}
                >
                    <Divider />
                    <Text
                        color={yoda}
                        fontSize={13}
                    >Or</Text>
                    <Divider />
                </Flex>

                {/* <Google />
                <FacebookLogin /> */}
            </>
        </AuthLayout>
    )
}

export default Login
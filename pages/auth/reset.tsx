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
import CustomButton from '../../public/components/button';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { reset } from '../../public/services/network';

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .matches(/\d/, 'Password must have a number')
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('New password is required'),
})

const Reset = () => {
    const theme = useTheme();
    const toast = useToast();
    const router = useRouter();
    const [checked, setChecked] = useState(false)
    const { colors: { brand: { primary, black, yoda } } } = theme;

    const { isLoading, mutate } = useMutation(reset, {
        onSuccess: (data: any) => {
            console.log('data', data?.response?.data?.status)
            if (data?.status == 200 || data?.status == 201) {
                toast({
                    title: "Reset",
                    description: "Password changed successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })

                router.push('/auth/reset')
            } else if (data?.response?.data?.status == 403) {
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
        onSubmit: (values) => {
            const data = { email: 'seinde4@gmail.com', password: values.password }
            mutate(data)
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
                    Reset Password ✍🏻
                </Text>
                <Text
                    color={yoda}
                    fontSize={14}
                    fontWeight={400}
                    width={300}
                    textAlign='left'
                >
                    Email verification is done. Please choose another password
                </Text>
                <FormInput
                    label='Password'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'password',
                        id: 'password',
                        placeholder: 'At least 6 characters',
                        isInvalid:
                            !!errors.password && touched.password,

                    }}
                    errorMessage={errors.password}
                />
                <CustomButton
                    title='Reset Password'
                    buttonProps={{
                        isLoading,
                        onClick: () => {
                            handleSubmit()
                        }
                    }}
                />
                <Text
                    pt={3}
                    fontWeight={600}
                    color={yoda}
                    fontSize={12}
                >
                    Go back to {' '}
                    <NextLink
                        href='/auth/login'>
                        <Link
                            textDecoration='none'
                            color={primary}
                        >
                            Login
                        </Link>
                    </NextLink>
                </Text>
            </>
        </AuthLayout>
    )
}

export default Reset
import {
    Grid,
    Text,
    Flex,
    GridItem,
    useTheme,
    Box,
    Link,
    useToast,
    FormErrorMessage
} from "@chakra-ui/react";
import CustomButton from "../../public/components/button";
import FormInput from "../../public/components/Input";
import AuthLayout from "./layout";
import NextLink from 'next/link'
import { Formik, Field } from 'formik'
import * as Yup from 'yup';
import { useFormik } from "formik";
import { register } from "../../public/services/network";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
    full_name: Yup.string().required('Please, enter your full name'),
    email: Yup.string().email().required('Email is required'),
    phone_number: Yup.string().required('Please, enter your phone number'),
    password: Yup.string()
        .matches(/\d/, 'Password must have a number')
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('New password is required'),
    confirm_password: Yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        })
})

const CreateAccount = () => {
    const theme = useTheme();
    const toast = useToast();
    const router = useRouter();
    const { isLoading , mutate} = useMutation(register, {
        onSuccess: (data: any) => {
            console.log('data', data?.data)
            if(data?.status == 200 || data?.status ==  201){
                toast({
                    title: "Sign up",
                    description: "Account created successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                })

                router.push('/auth/login')
            }
        }
    })
    const { colors: { brand: { primary, black, yoda } } } = theme

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            full_name: '',
            email: '',
            phone_number: '',
            password: '',
            confirm_password: ''
        },
        validationSchema,
        onSubmit: async (values: any) => {
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
                    Create Account✌🏻️
                </Text>
                <Text
                    color={yoda}
                    fontSize={14}
                    fontWeight={400}
                    width={300}
                    textAlign='center'
                >
                    Please sign up to your personal account if you want to use all our premium services.
                </Text>


                <FormInput
                    label='Full Name'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'full_name',
                        id: 'full_name',
                        isInvalid:
                            !!errors.full_name && touched.full_name,

                    }}
                    errorMessage={errors.full_name}

                />
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
                    label='Phone Number'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'phone_number',
                        id: 'phone_number',
                        isInvalid:
                            !!errors.phone_number && touched.phone_number,

                    }}
                    errorMessage={errors.phone_number}

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

                <FormInput
                    label='Confirm Password'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'confirm_password',
                        id: 'confirm_password',
                        isInvalid:
                            !!errors.confirm_password && touched.confirm_password,

                    }}
                    errorMessage={errors.confirm_password}

                />

                <CustomButton
                    title="Sign Up"
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
                    Already has an account? {' '}
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

export default CreateAccount
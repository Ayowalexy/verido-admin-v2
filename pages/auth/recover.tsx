import {
    Text,
    useTheme,
    Flex,
    Checkbox,
    Link,
    Box,
    Divider
} from '@chakra-ui/react'
import FormInput from "../../public/components/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import AuthLayout from './layout';
import { useState } from 'react';
import NextLink from 'next/link';
import CustomButton from '../../public/components/button';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Please, enter your email'),
})

const Recover = () => {
    const theme = useTheme();
    const [checked, setChecked] = useState(false)
    const { colors: { brand: { primary, black, yoda } } } = theme;

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
            console.log(values)
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
                    Recover Password  👀
                </Text>
                <Text
                    color={yoda}
                    fontSize={14}
                    fontWeight={400}
                    width={300}
                    textAlign='left'
                >
                    We’ll e-mail you instructions on how to reset your password.
                </Text>
                <FormInput
                    label='Email'
                    inputProps={{
                        onChange: handleChange,
                        onBlur: handleBlur,
                        name: 'email',
                        id: 'email',
                        placeholder: 'you@example.com',
                        isInvalid:
                            !!errors.email && touched.email,

                    }}
                    errorMessage={errors.email}
                />
                <CustomButton
                    title='Reset Password'
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

export default Recover
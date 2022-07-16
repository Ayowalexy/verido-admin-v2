import {
    FormLabel,
    FormErrorMessage,
    FormControl,
    Input,
    FormLabelProps,
    InputProps,
    InputGroup,
    InputRightElement,
    useTheme,
    Icon,
    Text
} from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ReactNode, useState, ChangeEvent } from 'react'


type FormInputProps = {
    label: string,
    errorMessage?: string,
    inputProps?: InputProps,
    labelProps?: FormLabelProps,
}


const FormInput = ({
    label,
    errorMessage,
    labelProps,
    inputProps = {},
}: FormInputProps) => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const theme = useTheme()
    const { isInvalid } = inputProps
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    return (
        <FormControl
            isInvalid={isInvalid}
        >
            <FormLabel
                mt={4}
                fontSize={14}
            >
                {label}:
            </FormLabel>
            <InputGroup>
                <Input
                    width={360}
                    height='48px'
                    fontSize={14}
                    type={
                        label?.toLowerCase()?.includes('password')
                            ? (
                                show ? 'text' : 'password'
                            )
                            : 'text'
                    }
                    fontWeight={300}
                    _focus={{
                        borderColor: theme.colors.brand.primary,
                        borderWidth: '0.3px'
                    }}
                    errorBorderColor={
                        label?.toLowerCase()?.includes('password')
                            ? theme.colors.brand.system_orange
                            : theme.colors.brand.danger
                    }
                    borderColor={theme.colors.brand.yoda}
                    {...inputProps}
                />
                {
                    label?.toLowerCase()?.includes('password')
                    &&
                    <InputRightElement
                        onClick={() => setShow(!show)}
                    >
                        <Icon
                            as={show ? AiOutlineEye : AiOutlineEyeInvisible}
                            w='1.6rem'
                            h='1.6rem'
                            color={theme.colors.brand.yoda}

                        />
                    </InputRightElement>
                }

            </InputGroup>
            <FormErrorMessage
                color={
                    label?.toLowerCase()?.includes('password')
                        ? theme.colors.brand.system_orange
                        : theme.colors.brand.danger
                }
                alignSelf="flex-start" fontSize={14}>
                {errorMessage}
            </FormErrorMessage>
        </FormControl>
    )
}

export default FormInput
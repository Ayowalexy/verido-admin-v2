import {
    Button,
    ButtonProps,
    useTheme
} from '@chakra-ui/react'


type buttonProps = {
    title: string,
    buttonProps?: ButtonProps,
    
}

const CustomButton = ({
    title,
    buttonProps
}: buttonProps) => {
    const theme = useTheme();
    return (
        <Button
            bgColor={theme.colors.brand.primary}
            width={360}
            height='48px'
            fontSize={14}
            mt={10}
            color={theme.colors.brand.white}
            fontWeight={400}
            _hover={{
                opacity: 0.8
            }}
            {...buttonProps}
        >
            {title}
        </Button>
    )
}

export default CustomButton
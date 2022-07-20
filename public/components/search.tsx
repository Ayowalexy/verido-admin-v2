import {
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement
} from '@chakra-ui/react'
import {AiOutlineUser} from 'react-icons/ai'

const Search = () => {
    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineUser color='gray.300' />}
                />
                <Input width={200} type='text' placeholder='Search' />
            </InputGroup>
        </Stack>
    )
}

export default Search
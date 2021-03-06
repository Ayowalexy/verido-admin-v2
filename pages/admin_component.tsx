import {
    Text,
    useTheme,
} from '@chakra-ui/react';
import Box_1 from '../public/components/Box/Box_1';
import Box_2 from '../public/components/Box/Box_2';
import Box_3 from '../public/components/Box/Box_3';
import Box_4 from '../public/components/Box/Box_4';
import Box_5 from '../public/components/Box/Box_5';
import Box_6 from '../public/components/Box/Box_6';
import Box_7 from '../public/components/Box/Box_7';
import Box_8 from '../public/components/Box/Box_8';


const AdminComponent = (props: any): JSX.Element => {
    const theme = useTheme();
    const { colors: { brand: { black, white, yoda } } } = theme;

    console.log('Admin propr', props)

    return (
        <>
            <Text
                pt={10}
                fontWeight={400}
                fontSize={27}
                color={black}
            >
                Welcome back, Edward 👋
            </Text>
            <Text
                fontWeight={300}
                fontSize={14}
                color={black}
            >
                Your current status and analytics are here
            </Text>
            <Box_1 />
            <Box_2 />
            <Box_3 />
            <Box_4 />
            <Box_5 />
            <Box_6 />
            <Box_7 />
            <Box_8 />
            
        </>
    )
}


export default AdminComponent

// export function getServerSideProps() {
//     const str = 'Hello'
//     return { props: { data: str } }
//   }


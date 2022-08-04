import {
    Text
} from '@chakra-ui/react';
import Layout from './layout';
import ConsultantComponent from '../consultant/consultant_component';

const AllConsultant = () => {
    return (
        <Layout active='Consultants'>
            <ConsultantComponent />
        </Layout>
    )
}

export default AllConsultant
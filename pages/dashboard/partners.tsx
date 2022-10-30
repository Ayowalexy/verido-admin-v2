import {
    Text
} from '@chakra-ui/react';
import Layout from './layout';
import ConsultantComponent from '../consultant/consultant_component';
import PartnersComponent from '../consultant/partners_consultants';

const AllConsultant = () => {
    return (
        <Layout active='Partners'>
            <PartnersComponent />
        </Layout>
    )
}

export default AllConsultant
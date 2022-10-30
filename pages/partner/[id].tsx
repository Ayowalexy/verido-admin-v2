import {
    Text
} from '@chakra-ui/react';
import Layout from '../dashboard/layout';
import { useRouter } from 'next/router';
import PartnerProfileComponent from './partner_profile_component';


const ConsultantProfile = () => {
    const router = useRouter();
    const params = router.query;
    console.log('Params', params)
    return (
        <Layout active='Consultants'>
            <PartnerProfileComponent id={params.id} />
        </Layout>
    )
}

export default ConsultantProfile
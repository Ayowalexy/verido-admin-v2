import {
    Text
} from '@chakra-ui/react';
import Layout from '../dashboard/layout';
import ConsultantProfileComponent from './consultant_profile_component';
import { useRouter } from 'next/router';


const ConsultantProfile = () => {
    const router = useRouter();
    const params = router.query;
    console.log('Params', params)
    return (
        <Layout active='Consultants'>
            <ConsultantProfileComponent id={params.id} />
        </Layout>
    )
}

export default ConsultantProfile
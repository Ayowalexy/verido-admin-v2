import {
    Text
} from '@chakra-ui/react';
import Layout from '../dashboard/layout';
import BusinessProfileComponent from './businessProfileComponent';
import { useRouter } from 'next/router';


const BusinessProfile = () => {
    const router = useRouter();
    const params = router.query;

    console.log('Router', params?.id)
    return (
        <Layout active='Business Owners'>
            <BusinessProfileComponent _id={params?.id || '63357146124db540ce2eb2af'} />
        </Layout>
    )
}


export default BusinessProfile
import Layout from "./layout";
import {
    Text,
    Box,
    Flex
} from '@chakra-ui/react';
import BusinessComponent from "../business/business_componet";

const Businesses = () => {
    return (
        <Layout active="Business Owners">
            <BusinessComponent />
        </Layout>
    )
}

export default Businesses
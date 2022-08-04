import {
    Text,
    Box
} from '@chakra-ui/react';
import Layout from './dashboard/layout';
import AdminComponent from './admin_component';


const Admin = () => {
    return (
        <Layout active='Dashboard'>
            <AdminComponent />
        </Layout>
    )
}

export default Admin
  
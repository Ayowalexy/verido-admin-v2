import {
    Text,
    Box
} from '@chakra-ui/react';
import Layout from './dashboard/layout';
import AdminComponent from './admin_component';


const Admin = (props: any) => {
    console.log('admin now', props)
    return (
        <Layout active='Dashboard'>
            <AdminComponent />
        </Layout>
    )
}

export default Admin

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
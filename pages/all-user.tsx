import { Box } from '@chakra-ui/react';
import Layout from './dashboard/layout';
import { useState, useEffect } from 'react';
import { getAllUser } from '../public/services/network';
import BusinessOwnerTable from './business/business_owner_tables';
import TableSkeleton from '../public/components/Skelotons/Table.skeleton';


const AllUser = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await getAllUser();
            setIsLoading(false);
            setData(res)
        })()
    }, []);

    return (
        <Layout active="All Users">
            {
                !isLoading
                ?
                <BusinessOwnerTable showExport={true} data={data} />
                :
                <TableSkeleton isLoading={isLoading} />
            }
        </Layout>
    )
}

export default AllUser
import {
    Text,
    Box
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import BusinessOwnerTable from './business_owner_tables';
import { useState, useEffect } from 'react';
import { getAllBusiness } from '../../public/services/network';
import TableSkeleton from '../../public/components/Skelotons/Table.skeleton';
import ProfileSkeleton from '../../public/components/Skelotons/Profile.Skeleton';

const BusinessComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const allBusiness = async () => {
        setIsLoading(true)
        const res = await getAllBusiness();

        setData(res)
        setIsLoading(false)
    }

    console.log('data', data)
    useEffect(() => {
        allBusiness()
    }, [])

    return (
        <Box>
            <VeridoBreadCrump
                items={[
                    { name: 'Home', to: '/admin', current: true },
                    { name: 'Business Owners', to: '#', current: false }
                    ,]}
            />
            {
                !isLoading
                ?
                <BusinessOwnerTable data={data} />
                :
                <TableSkeleton isLoading={isLoading} />
            }
        </Box>
    )
}

export default BusinessComponent
import {
    Text,
    Box
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import BusinessOwnerTable from './business_owner_tables';
import { useState, useEffect } from 'react';
import { getAllBusiness, getAllConsultantBusiness, getPartnerBusiness } from '../../public/services/network';
import TableSkeleton from '../../public/components/Skelotons/Table.skeleton';
import ProfileSkeleton from '../../public/components/Skelotons/Profile.Skeleton';
import { getUser } from '../../public/utils/utils';
import getRole from '../../public/utils/utils';

const BusinessComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
 
    

    useEffect(() => {
        (async () => {
            setIsLoading(true)

            const user = await getUser();
            const userId = user?._id;
            const role = await getRole();
            if(role === 'Consultant'){
                const res = await getAllConsultantBusiness(userId);
                setData(res)
            } else if(role === 'Partner'){
                const res = await getPartnerBusiness(userId);
                setData(res)
            } else if(role === 'Admin'){
                const res = await getAllBusiness();
                setData(res)
            }
            setIsLoading(false)

        })()
    },[])

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
                <BusinessOwnerTable showExport={false} data={data} />
                :
                <TableSkeleton isLoading={isLoading} />
            }
        </Box>
    )
}

export default BusinessComponent
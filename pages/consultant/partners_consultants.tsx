import {
    Text,
    Box
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import TableSkeleton from '../../public/components/Skelotons/Table.skeleton';
import { useState, useEffect } from 'react';
import { getAllConsultants, getAllPartners } from '../../public/services/network';
import PartnerTable from '../partner/partner_table'

const PartnersComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const handleGetAllConsultants = async () => {
        setIsLoading(true)
        const res = await getAllPartners();
        setData(res)
        setIsLoading(false);
      }
    
      useEffect(() => {
        handleGetAllConsultants();
      }, [])
    return (
        <Box>
            <VeridoBreadCrump 
                items={[
                    { name: 'Home', to: '/admin', current: true}, 
                    {name: 'Partners', to: '/dashboard/partners', current: false}
                    ,]}
                 />
                 {
                    !isLoading
                    ?
                    <PartnerTable data={data} />
                    : 
                    <TableSkeleton isLoading={isLoading} />
                 }
        </Box>
    )
}

export default PartnersComponent
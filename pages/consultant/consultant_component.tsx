import {
    Text,
    Box
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import ConsultantTable from './consultant_table';
import TableSkeleton from '../../public/components/Skelotons/Table.skeleton';
import { useState, useEffect } from 'react';
import { getAllConsultants } from '../../public/services/network';

const ConsultantComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const handleGetAllConsultants = async () => {
        setIsLoading(true)
        const res = await getAllConsultants();
        setData(res)
        setIsLoading(false)
        console.log('All consultants', res)
      }
    
      useEffect(() => {
        handleGetAllConsultants();
      }, [])
    return (
        <Box>
            <VeridoBreadCrump 
                items={[
                    { name: 'Home', to: '/admin', current: true}, 
                    {name: 'Consultants', to: '/dashboard/consultant', current: false}
                    ,]}
                 />
                 {
                    !isLoading
                    ?
                    <ConsultantTable data={data} />
                    : 
                    <TableSkeleton isLoading={isLoading} />
                 }
        </Box>
    )
}

export default ConsultantComponent
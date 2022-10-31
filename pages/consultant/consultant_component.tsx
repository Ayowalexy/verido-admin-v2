import {
    Text,
    Box
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import ConsultantTable from './consultant_table';
import TableSkeleton from '../../public/components/Skelotons/Table.skeleton';
import { useState, useEffect } from 'react';
import { getAllConsultants, getAllPartners, getPartnerConsultants } from '../../public/services/network';
import getRole from '../../public/utils/utils';
import { getUser } from '../../public/utils/utils';


const ConsultantComponent = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
  

      useEffect(() => {
        (async () => {
          const role = await getRole();
          const user = await getUser();
          setIsLoading(true);
    
          const userId = user?._id;
          if (role === "Partner") {
            const res = await getPartnerConsultants(userId);
            console.log('Partner consultant', res)
            setData(res);
          } else {
            const res = await getAllConsultants();
            setData(res);
          }
          setIsLoading(false);
        })();
      }, []);
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
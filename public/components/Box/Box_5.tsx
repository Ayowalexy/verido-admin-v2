
import { useState, useEffect, SyntheticEvent } from "react";
import { Box } from '@chakra-ui/react'
import { getAllBusiness, getPartnerBusiness, getAllConsultantBusiness } from '../../services/network'
import TableSkeleton from '../Skelotons/Table.skeleton'
import BusinessTable from '../../../pages/business/business_owner_tables'
import getRole from "../../utils/utils";
import { getUser } from "../../utils/utils";


const Box_5 = () => {
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
      }, []);
    

    return (
        <Box>
            {
                !isLoading
                ?
                <BusinessTable showExport={false} data={data} />
                :
                <TableSkeleton isLoading={isLoading} />

            }
        </Box>

    )
}

export default Box_5
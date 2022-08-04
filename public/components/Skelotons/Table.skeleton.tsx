import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import { SetStateAction } from 'react';

type tableProps = {
    isLoading: boolean
}

const TableSkeleton = ({isLoading}: tableProps) => {
    return (
        <Stack pt={30}>
            {
                Array(7).fill(1).map((element, idx) => (
                    <Skeleton isLoaded={false} height={idx % 2 == 0 ? '60px' : "30px"} key={idx}/>
                ))
            }
        </Stack>
    )
}

export default TableSkeleton
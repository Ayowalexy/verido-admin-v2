import { Skeleton, SkeletonCircle, SkeletonText, Stack, Flex, Box, HStack } from '@chakra-ui/react';
import { SetStateAction } from 'react';



const ProfileSkeleton = () => {
    return (
        <Stack pt={30}>
            <HStack>
                <SkeletonCircle size='100' />
                <Skeleton height='10' />
            </HStack>
            {
                Array(7).fill(1).map((element, idx) => (
                    <Skeleton width={idx % 2 !== 0 ? "80%" : '100%'} height={idx % 2 == 0 ? '60px' : "30px"} key={idx} />
                ))
            }
        </Stack>
    )
}

export default ProfileSkeleton
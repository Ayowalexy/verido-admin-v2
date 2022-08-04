import {
    Flex,
    Box,
    Text,
    useTheme,
    VStack,
    Divider,
    HStack,
    Icon
} from '@chakra-ui/react';
import VeridoBreadCrump from '../../public/components/breadcrumb';
import Avatar from '../../public/imgs/svgs/avatar.svg'
import CustomButton from '../../public/components/button';
import Read from '../../public/imgs/svgs/read.svg'
import Box_6 from '../../public/components/Box/Box_6';
import Box_7 from '../../public/components/Box/Box_7';
import Box_8 from '../../public/components/Box/Box_8';
import VeridoModal from '../../public/components/modal';
import { useState, useEffect } from 'react';
import BusinessOwnerConsultant from './business_owner_consultant';
import ProfileSkeleton from '../../public/components/Skelotons/Profile.Skeleton';
import { getOneBusiness, deleteOneBusiness, suspendBusiness } from '../../public/services/network'
import { Router, useRouter } from 'next/router';

type idProps = {
    _id: string | any
}

const BusinessProfileComponent = ({ _id }: idProps) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [modalContent, setModalContent] = useState<any>({})
    const [profileData, setProfileData] = useState<any>({})
    const [action, setAction] = useState('')
    const router = useRouter();

    const userBusiness = async () => {
        setIsLoading(true)
        const res = await getOneBusiness(_id)
        setProfileData(res)
        setIsLoading(false)
    }

    const handleDeleteOneBusiness = async () => {
        const response = await deleteOneBusiness(_id);
    }

    const handleSuspendOneBusiness = async () => {
        await suspendBusiness(_id)
    }


    useEffect(() => {
        userBusiness()
    }, [])
    return (
        <Box
            mb={20}
        >
            <VeridoBreadCrump
                items={[
                    { name: 'Home', to: '/admin', current: true },
                    { name: 'Business', to: '/business', current: true },
                    { name: profileData?.business?.name || 'No Business', to: '#', current: false }
                    ,]}
            />
            {
                !isLoading
                    ?
                    (
                        <>
                            <Flex
                                width='100%'
                                bgColor={theme.colors.brand.white}
                                borderRadius={16}
                                mt={4}
                            >
                                <Flex
                                    flexBasis='23%'
                                    align='center'
                                    mt={10}
                                    justify='space-between'
                                    flexDir='column'
                                    borderRight='1px solid rgba(223, 230, 233, 1)'
                                >
                                    <VStack>
                                        <Avatar />
                                        <Text
                                            fontWeight={300}
                                            fontSize={24}
                                        >
                                            {profileData?.full_name || 'No Business'}
                                        </Text>
                                        <Text
                                            fontWeight={200}
                                            fontSize={14}
                                        >
                                            {profileData?.email?.includes('@') ? profileData.email : 'No Email'}
                                        </Text>
                                        <CustomButton
                                            buttonProps={{
                                                onClick: () => {
                                                    setAction('delete')
                                                    setModalContent({
                                                        title: "Confirm Delete",
                                                        body: 'Please, confirm your deletion of this account. Once delected, all user details and history are lost '
                                                    })
                                                    setIsOpen(true)
                                                }
                                            }}
                                            title='Delete Business' />


                                    </VStack>
                                    <Read />
                                </Flex>
                                <Box
                                    flexBasis='77%'
                                    p={5}


                                >
                                    <Flex
                                        width='100%'
                                        justify='space-between'

                                    >
                                        <VStack
                                            align='flex-start'
                                            width={400}
                                        >
                                            <Text
                                                fontWeight={400}
                                                fontSize={28}
                                                textAlign='left'
                                            >Business Owner’s Informations</Text>
                                            <Text
                                                textAlign='left'
                                                fontWeight={200}

                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.
                                            </Text>
                                        </VStack>
                                        <Box

                                        >
                                            <CustomButton
                                                buttonProps={{
                                                    width: 137,
                                                    bgColor: theme.colors.brand.suspend,
                                                    onClick: () => {
                                                        setAction('suspend')
                                                        setModalContent({
                                                            title: "Confirm suspensions",
                                                            body: 'Please, confirm your suspension of this account. Once suspended, users will be unable to login into their verido account'
                                                        })
                                                        setIsOpen(true)
                                                    }
                                                }}
                                                title={profileData.suspended ? 'Re-activate' : 'Suspend'} />
                                        </Box>
                                    </Flex>
                                    <Divider pt={8} orientation='horizontal' />

                                    <VStack
                                        align='flex-start'
                                        pt={10}
                                    >
                                        <Text
                                            fontWeight={400}
                                            fontSize={28}
                                            textAlign='left'
                                        >About</Text>
                                        <Text
                                            textAlign='left'
                                            fontWeight={200}

                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse velit mi, pretium non euismod vitae
                                            Suspendisse velit mi, pretium non euismod vitae
                                        </Text>
                                    </VStack>
                                    <Divider pt={8} orientation='horizontal' />
                                    <Text
                                        fontWeight={400}
                                        fontSize={28}
                                        textAlign='left'
                                        pt={8}
                                    >
                                        Contact
                                    </Text>
                                    {
                                        [
                                            {
                                                title: 'Enterprise Name',
                                                value: profileData?.business?.name
                                            },
                                            {
                                                title: 'Institution',
                                                value: 'Institution234'
                                            },
                                            {
                                                title: 'Admin Name',
                                                value: 'John Doe'
                                            },
                                            {
                                                title: 'Phone',
                                                value: profileData?.username
                                            },

                                        ].map((element, idx) => (
                                            <Flex
                                                fontWeight={300}
                                                fontSize={14}
                                                key={idx}
                                                gap={10}
                                                pt={5}
                                                justify='flex-start'
                                            >
                                                <Text width={150}>{element.title}</Text>
                                                <Text>{element.value}</Text>
                                            </Flex>
                                        ))
                                    }
                                    <Divider pt={8} orientation='horizontal' />
                                    <Text
                                        fontWeight={400}
                                        fontSize={28}
                                        textAlign='left'
                                        pt={8}
                                    >
                                        Registeration
                                    </Text>
                                    {
                                        [
                                            {
                                                title: 'Date Joined',
                                                value: profileData?.dateJoined
                                            },
                                            {
                                                title: 'Status',
                                                value: profileData?.subscription_status?.type
                                            },
                                            {
                                                title: 'Subscription Expires',
                                                value: profileData?.subscription_status?.expires
                                            },


                                        ].map((element, idx) => (
                                            <Flex
                                                fontWeight={300}
                                                fontSize={14}
                                                key={idx}
                                                gap={10}
                                                pt={5}
                                                justify='flex-start'
                                            >
                                                <Text width={150}>{element.title}</Text>
                                                <Text>{element.value}
                                                </Text>
                                            </Flex>
                                        ))
                                    }
                                </Box>

                            </Flex>
                            <BusinessOwnerConsultant />
                            <Box_6 />
                            <Box_7 />
                            <Box_8 />
                        </>
                    )
                    :
                    (
                        <ProfileSkeleton />
                    )
            }
            <VeridoModal
                isOpen={isOpen}
                modalContent={modalContent}
                buttonProps={{
                    onClick: () => {
                        if(action == 'suspend'){ 
                            handleSuspendOneBusiness()
                        } else {
                            handleDeleteOneBusiness()
                        }
                        router.push('/dashboard/business')
                        setIsOpen(false)
                    }
                }}
            />
        </Box>
    )
}

export default BusinessProfileComponent
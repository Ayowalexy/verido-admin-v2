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
import { AiFillStar } from 'react-icons/ai';
import BusinessOwnerTable from '../business/business_owner_tables';
import VeridoModal from '../../public/components/modal';
import { useState, useEffect } from 'react';
import { getOneConsultant, suspendConsultant, deleteConsultant } from '../../public/services/network';
import { useRouter } from 'next/router';
import ProfileSkeleton from '../../public/components/Skelotons/Profile.Skeleton';

type idProps = {
    id: string | any
}

const ConsultantProfileComponent = ({ id }: idProps) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false)
    const [action, setAction] = useState('')
    const [modalContent, setModalContent] = useState<any>({})
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)
    const [profileData, setProfileData] = useState<any>({})

    const handleGetOneConsultants = async () => {
        const res = await getOneConsultant(id);
        setProfileData(res)
        setIsLoading(false)

    }

    const handleSuspend = async () => {
        await suspendConsultant(id)
        router.push('/dashboard/consultant')
    }


    const handleDelete = async () => {
        await deleteConsultant(id)
        router.push('/dashboard/consultant')
    }

    useEffect(() => {
        handleGetOneConsultants();
    }, [])
    return (
        <Box
            mb={20}
        >
            <VeridoBreadCrump
                items={[
                    { name: 'Home', to: '/admin', current: true },
                    { name: 'Consultants', to: '/consultant', current: true },
                    { name: profileData?.username, to: '#', current: false }
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
                                {profileData?.username}
                            </Text>
                            <Text
                                fontWeight={200}
                                fontSize={14}
                            >
                                {profileData?.email}
                            </Text>
                            <CustomButton 
                            buttonProps={{
                                width: 137,
                                onClick: () => {
                                    setAction('delete')
                                    setModalContent({
                                        title: "Confirm Delete",
                                        body: 'Please, confirm your deletion of this account. Once delected, all user details and history are lost '
                                    })
                                    setIsOpen(true)
                                }}
                            }
                            title='Delete Consultant' />


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
                                >Company’s Informations</Text>
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
                                                title: "Confirm Suspend",
                                                body: 'Please, confirm your suspension of this account. Once suspended, users will be unable to login into their verido account'
                                            })
                                            setIsOpen(true)
                                        }
                                    }}
                                    title={profileData.suspended ? 'Re-activate' : 'Suspend'}
                                    />
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
                                    title: 'Consultant ID',
                                    value: profileData?.consultant_id
                                },
                                {
                                    title: 'Email',
                                    value: profileData?.email
                                },
                                {
                                    title: 'Phone',
                                    value: profileData?.mobile_number
                                },
                                {
                                    title: 'Date Joined',
                                    value: new Date(profileData?.createdAt).toLocaleDateString()
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
                            Status
                        </Text>
                        {
                            [
                                {
                                    title: 'Status',
                                    value: !profileData?.suspended ? 'Active' : 'Suspended'
                                },
                                {
                                    title: 'Rating',
                                    value: profileData?.rating?.toString()
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
                                    <Text>
                                        {
                                            element.title == 'Rating'
                                                ? (
                                                    <>
                                                        {
                                                            Array(Number(3)).fill(0).map((_, idx) => (
                                                                <Icon key={idx} as={AiFillStar} color='rgba(255, 199, 0, 1)' />
                                                            ))
                                                        }
                                                    </>
                                                )
                                                :
                                                element.value
                                        }
                                    </Text>
                                </Flex>
                            ))
                        }
                    </Box>

                </Flex>

                <BusinessOwnerTable data={profileData.business}/>
            </>
            )
            :
            <ProfileSkeleton />
           }

            <VeridoModal
                isOpen={isOpen}
                modalContent={modalContent}
                buttonProps={{
                    onClick: () => {
                        if(action == 'suspend'){
                            handleSuspend();
                            setIsOpen(false)
                        } else {
                            handleDelete();
                        }
                    }
                }}
            />
        </Box>
    )
}

export default ConsultantProfileComponent
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbProps,
    useTheme
} from '@chakra-ui/react';
import { ReactNode } from 'react'


type breadcrumbItemprops = {
    name: string | undefined,
    to: string,
    current: boolean
}

type breadcrumpProps = {
    current?: string,
    items: Array<breadcrumbItemprops>
}


const VeridoBreadCrump = (
    { current, items }: breadcrumpProps
): JSX.Element => {
    const theme = useTheme();
    return (
        <Breadcrumb
            pt={5}
            fontWeight='400'
            fontSize='sm'>
            {
                items.map((element, idx) => (
                    <BreadcrumbItem key={idx}>
                        <BreadcrumbLink 
                            color={element.current ? theme.colors.brand.primary : theme.colors.brand.yoda}
                            href={element.to} >{element.name}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    )
}


export default VeridoBreadCrump
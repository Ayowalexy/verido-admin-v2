


export type businessProps = {
    _id?: string;
    currency: string;
    currencySymbol: string | null;
    name: string | null;
    type: string | null;
    sector: string;
    __v?: number
}

export type newBusinessProps = {
    full_name?: string;
    email?: string;
    username?: string;
    password?: string;
    consultant_id?: string;
}

export type subProps = {
    _id?: string;
    expires: string;
    started: string;
    status: boolean;
    type: string
}

export type consultantProps = {
    _id?: string;
    consultant_id?: string;
    email?: string;
    mobile_number?: string;
    username?: string;
    password?: string;
}


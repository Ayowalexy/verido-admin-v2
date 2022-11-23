import { useState, createContext } from "react";

export const UserRoleContext = createContext({
    userRole: '',
    setUserRole: (args) => null,

    reload: false,
    setReload: (args) => null,

    userId: '',
    setUserId: (args) => null
})

export const UserRoleProvider = ({children}) => {
    const [userRole, setUserRole] = useState('');
    const [reload, setReload] = useState(false);
    const [userId, setUserId] = useState("")
    const value = { userRole, setUserRole, reload, setReload, userId, setUserId };

    return <UserRoleContext.Provider value={value}>{children}</UserRoleContext.Provider>
}
'use client'
import { useAuth } from "@/components/context/AuthContext";

const AdminLayout = ({ children, login }) => {
    const { user } = useAuth()
    return (
        <>
            {
                user.logged
                    ? children
                    : login
            }
        </>
    )
}

export default AdminLayout
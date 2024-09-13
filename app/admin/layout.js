'use client'
import { useAuth } from "@/components/context/AuthContext";

const AdminLayout = ({ children, login }) => {
    const { user } = useAuth()
    // const logged = false
    return (
        <>
            {
                true //forzado el login
                    ? children
                    : login
            }
        </>
    )
}

export default AdminLayout
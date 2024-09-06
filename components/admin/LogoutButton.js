'use client'
import { useAuth } from "../context/AuthContext";
import Button from "../Button";

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <div className="flex justify-end">
            <Button onClick={logout} className="bg-red-600 hover:bg-red-800">Cerrar sesión</Button>
        </div>
    );
};

export default LogoutButton;
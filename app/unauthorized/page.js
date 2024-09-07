import Button from "@/components/Button";
import Link from "next/link";

const Unauthorized = () => {
    return (
        <div className="container">
            <h1>Usuario no autorizado</h1>
            <p>No dispones de los permisos necesarios para acceder a esta página.</p>
            <Link href="/">
                <Button>Volver a la página principal</Button>
            </Link>
        </div>
    )
}

export default Unauthorized;
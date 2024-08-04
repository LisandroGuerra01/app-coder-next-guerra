import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-950">
      <div className="container m-auto py-3 gap-3 text-sm text-gray-300 flex flex-col items-center">
        <Image src="/gg-logo-white-transparent.png" alt="Logo" width={100} height={50} />
        <div className="flex gap-3">
          {/* Agregar íconos */}
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={''} alt='logo' height={10} width={35}/></a>
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={''} alt='logo' height={10} width={35}/></a>
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={''} alt='logo' height={10} width={35}/></a>
        </div>
        <div>
          <span className="font-bold">© 2024 Groide Gaming</span> | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
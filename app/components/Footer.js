import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-600 mt-10">
      <div className="container m-auto py-3 gap-3 text-sm text-gray-300 flex flex-col items-center">
        <Image src="/gg-logo.png" alt="Logo" width={300} height={50} />
        <div className="flex gap-3">
          {/* Agregar íconos */}
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={'/Recurso 9@2x.png'} alt='logo' height={10} width={35}/></a>
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={'/Recurso 9@2x.png'} alt='logo' height={10} width={35}/></a>
          <a href="https://www.instagram.com/contadores_net/" className="hover:text-white"><Image src={'/Recurso 9@2x.png'} alt='logo' height={10} width={35}/></a>
        </div>
        <div>
          <span className="font-bold">© 2024 ContadoresNet</span> | Lisandro Guerra - Contador Público Nacional
        </div>
      </div>
    </footer>
  );
};

export default Footer;
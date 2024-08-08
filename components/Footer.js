import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-950">
      <div className="flex items-center justify-center gap-5">
        <div className="py-3 gap-3 text-sm text-gray-300 flex flex-col">
          <span className="text-orange-500 text-lg"><a href="/contact">¡Contactanos!</a></span>
          <p className="hover:text-orange-500 cursor-pointer">San Miguel de Tucumán, Tucumán</p>
          <p className="hover:text-orange-500 cursor-pointer">WhatsaApp: +54 381 555-5555</p>
          <p className="hover:text-orange-500 cursor-pointer">contacto@groidegaming.com</p>
        </div>
        <div className="py-3 gap-3 text-sm text-gray-300 flex justify-center flex-col items-center">
          <Link href="/">
            <Image src="/gg-logo-white-transparent.png" alt="Logo" width={100} height={50} />
          </Link>
          <div className="flex gap-5">
            <Link href="#">
              <span className="text-slate-300 hover:text-orange-500 cursor-pointer"><FaFacebookF size={34} /></span>
            </Link>
            <Link href="#">
              <span className="text-slate-300 hover:text-orange-500 cursor-pointer"><FaInstagram size={34} /></span>
            </Link>
            <Link href="#">
              <span className="text-slate-300 hover:text-orange-500 cursor-pointer"><FaTwitter size={34} /></span>
            </Link>
          </div>
          <div>
            <span className="font-bold">© 2024 Groide Gaming</span> | Todos los derechos reservados
          </div>
        </div>
        <div className="py-3 gap-3 text-sm text-gray-300 flex flex-col">
          <span className="text-orange-500 text-lg"><a href="https://autogestion.produccion.gob.ar/consumidores" target="_blank">Defensa del Consumidor</a></span>
          <p className="hover:text-orange-500"><a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/638/norma.htm" target="_blank">Ley de defensa del consumidor</a></p>
          <p className="hover:text-orange-500"><a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/conoce-tus-derechos" target="_blank">Conocé tus derechos consumidor</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
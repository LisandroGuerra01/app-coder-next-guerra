import React from 'react';
import Image from "next/image";
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='w-full bg-gray-600'>
            <div className='container m-auto py-4 flex justify-between items-center'>
                <a href="./"><Image src={'/logo-claro.png'} alt='logo' height={100} width={75} /></a>
                <div className=''>
                </div>
                <Menu />
            </div>
            <hr />
            <div className='flex justify-center gap-4 text-white'>
                <a href="./products" className="hover:bg-white">Productos</a>
                <a href="./contact" className="hover:bg-white">Contacto</a>
                <a href="./contact" className="hover:bg-white">Productos</a>
            </div>
        </div>
    )
}

export default Navbar;
import React from 'react';
import Image from "next/image";
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='w-full bg-gray-600'>
            <div className='container m-auto py-4 flex justify-between items-center'>
                <Image src={'/logo-claro.png'} alt='logo' height={200} width={50}/>
                <Menu />
            </div>

        </div>
    )
}

export default Navbar;
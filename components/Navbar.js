'use client'
import React from 'react';
import Image from "next/image";
import Menu from './Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {

    const links = [
        { href: '/', label: 'Inicio' },
        { href: '/products', label: 'Productos' },
        { href: '/contact', label: 'Contacto' },
        { href: '/faq', label: 'FAQ' },
        { href: '/posts', label: 'Posts'}
    ];
    const pathname = usePathname();

    return (
        <div className='w-full bg-indigo-950'>
            <div className='container m-auto p-4 columns-2 flex md:justify-between items-center'>
                <Link href={'/'}>
                    <Image src={'/gg-logo-transparent.png'} alt='logo' height={100} width={75} className='invisible md:visible'/>
                </Link>
                    <div className='grid inline-grid grid-cols-1 gap-4 text-white md:grid-cols-5'>
                        {links.map(link => {
                            return <Link key={link.label} href={link.href} className={`${pathname === link.href ? 'font-extrabold transition ease-in-out delay-50 translate-x-2 scale-110' : 'font-semibold'} text-center text-slate-300 m-2 p-2 hover:bg-indigo-600 focus:ring rounded-lg focus:ring-indigo-300`}>{link.label}</Link>
                        }
                        )}
                    </div>
                <div className='flex gap-1'>
                    <Link href={'/cart'} className=''>
                        <span className='text-slate-300'><FaShoppingCart size={30} /></span>
                        {/* <Image src={"/cart-shopping-solid.png"} alt='cart-icon' height={30} width={30} /> */}
                    </Link>|
                    <Link href={'/admin'} className='text-base text-slate-300 hover:underline rounded-lg'>Admin</Link>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbar;
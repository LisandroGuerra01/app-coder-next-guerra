'use client'
import React from 'react';
import Image from "next/image";
import Menu from './Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Icon } from '../app/icons';


const Navbar = () => {

    const links = [
        { href: '/', label: 'Inicio' },
        { href: '/products', label: 'Productos' },
        { href: '/contact', label: 'Contacto' },
        { href: '/FAQ', label: 'FAQ' }
    ];
    const pathname = usePathname();

    return (
        <div className='w-full bg-indigo-950'>
            <div className='container m-auto p-4 columns-2 flex md:justify-between items-center'>
                <Link href={'/'}>
                    <Image src={'/gg-logo-transparent.png'} alt='logo' height={100} width={75} />
                </Link>
                <div>
                    <div className='flex gap-4 text-white invisible md:visible'>
                        {links.map(link => {
                            return <Link key={link.label} href={link.href} className={`${pathname === link.href ? 'font-extrabold transition ease-in-out delay-50 translate-x-2 scale-110' : 'font-semibold'} text-base text-slate-300 m-2 p-2 hover:bg-indigo-600 focus:ring rounded-lg focus:ring-indigo-300`}>{link.label}</Link>
                        }
                        )}
                    </div>
                    <div className='flex visible md:invisible'>
                        <Menu />
                    </div>
                </div>
                <div className='flex gap-1'>
                    <Link href={'/cart'} className=''>
                        <Icon icon={faCartShopping} />
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
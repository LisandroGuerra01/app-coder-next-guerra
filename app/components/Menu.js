'use client'
import React, { useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div onClick={handleOpen}>
            <Image src={'/boton-hamb.png'} alt='menu-logo' height={40} width={60}/>
            <MenuList handleClose={handleClose} open={open} />
        </div>
    );
};

export default Menu;
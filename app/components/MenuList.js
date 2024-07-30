import React from "react";

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? 'opacity-85 visible' : 'invisible'} transition-all fixed insec-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-y-6' : ''} transition-all w-48 bg-indigo-700`}>
                <div onClick={handleClose} className="text-white p-2 hover:text-gray-300 text-right">
                    X
                </div>
                <nav className="flex flex-col gap-3 p-3">
                    <a className="text-white p-2 hover:text-gray-300" href="#">
                        Enlace 1
                    </a>
                    <a className="text-white p-2 hover:text-gray-300" href="#">
                        Enlace 2
                    </a>
                    <a className="text-white p-2 hover:text-gray-300" href="#">
                        Enlace 3
                    </a>
                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
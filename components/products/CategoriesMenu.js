'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/products/all" },
    { label: "Monitores", href: "/products/monitores" },
    { label: "Gabinetes", href: "/products/gabinetes" },
    { label: "Mouse", href: "/products/mouse" },
    { label: "Teclados", href: "/products/teclados" },
    { label: "Auriculares", href: "/products/auriculares" },
    { label: "Mandos", href: "/products/mandos" },
    { label: "Placas de video", href: "/products/placas" },
    { label: "Motherboards", href: "/products/motherboards" },
    { label: "Memorias RAM", href: "/products/ram" },
    { label: "Discos", href: "/products/discos" },
    { label: "Fuentes", href: "/products/fuentes" },
]

const CategoriesMenu = () => {
    const pathname = usePathname()
    return (
        <aside className="flex flex-col gap-3 ">
            {
                links.map(link => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold bg-indigo-700 p-1 ring ring-violet-700" : ""} py-2 rounded-md`}
                    >
                        {link.label}
                    </Link>
                ))
            }
        </aside>
    )
}

export default CategoriesMenu 
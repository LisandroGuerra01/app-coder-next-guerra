import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        href: "/products/placas",
        src: "/placa-banner.png",
        alt: "placa-de-video",
        label: "Placas de video",
    },
    {
        href: "/products/monitores",
        src: "/monitor-banner.png",
        alt: "Monitores",
        label: "Monitores",
    },
    {
        href: "/products/motherboards",
        src: "/mother-banner.png",
        alt: "Motherboards",
        label: "Motherboards",
    },
];

export const CategoriesBanner = () => {
    return (
        <div className="flex justify-center gap-5 my-5">
            {categories.map((category) => (
                <Link href={category.href} key={category.label}>
                    <div className="relative w-full transition-transform duration-400 ease-in-out transform hover:scale-105 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 p-5">
                        <Image
                            src={category.src}
                            alt={category.alt}
                            width={422}
                            height={528}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-sky-500 to-indigo-800 bg-opacity-50 p-4 text-white text-center">
                            {category.label}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
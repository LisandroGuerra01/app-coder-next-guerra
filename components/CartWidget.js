'use client'
import Link from 'next/link'
import { useCartContext } from './context/CartContext'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const { totalQty } = useCartContext()

    return (
        <Link href='/cart' className='absolute flex items-center'>
            <FaShoppingCart className='text-3xl' />
            {totalQty() > 0 && (
                <span className='absolute -bottom-1 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                    {totalQty()}
                </span>
            )}
        </Link>
    )
}

export default CartWidget;
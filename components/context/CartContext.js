'use client'
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //añadir item al carrito
    const addToCart = (item) => {
        const itemInCart = cart.find(cartItem => cartItem.slug === item.slug)
        if (itemInCart) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.slug === item.slug) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const totalQty = () => cart.reduce((acc, item) => acc + item.quantity, 0)

    //eliminar un producto del carrito
    const removeFromCart = (item) => {
        const updatedCart = cart.filter(i => i.item !== item)
        setCart(updatedCart)
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, isInCart, totalQty, removeFromCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}
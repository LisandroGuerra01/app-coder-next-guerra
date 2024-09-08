'use client'
import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Cargar el carrito desde localStorage al montar el componente
    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    //Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    //Añadir item al carrito
    const addToCart = (item) => {
        const itemInCart = cart.find(cartItem => cartItem.slug === item.slug)
        if (itemInCart) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.slug === item.slug) {
                    if (cartItem.quantity >= item.stock) {
                        alert('No hay suficiente stock')
                    } else {
                        return { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    }
                }
                return cartItem
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...item, quantity: item.quantity }])
        }
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    //Obtener cantidad de items en el carrito
    const getQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0)

    //Obtener precio total del carrito
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    //Eliminar un producto del carrito
    const removeFromCart = (item) => {
        const updatedCart = cart.filter(i => i.slug !== item.slug)
        setCart(updatedCart)
    }

    //Actualizar cantidad
    const updateQuantity = (item, newQuantity) => {
        const updatedCart = cart.map(cartItem => 
            cartItem.slug === item.slug ? { ...cartItem, quantity: newQuantity } : cartItem
        );
        setCart(updatedCart);
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, isInCart, getQuantity, getTotalPrice, removeFromCart, updateQuantity, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}
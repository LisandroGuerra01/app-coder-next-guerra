'use client'
import { useState } from 'react'
import Button from "@/components/Button"
import { useAuth } from '@/components/context/AuthContext'

const LoginForm = () => {
    const { signup, loginUser, googleLogin } = useAuth()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-screen flex justify-center'>
            <form onSubmit={handleSubmit} className='bg-white py-4 px-6 rounded-xl max-w-md w-full'>
                <h3 className='text-black mb-5'>Iniciar sesión</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-600'
                />
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    className='mt-2 mb-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-600'
                />
                <Button
                    className="bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => loginUser(values)}>
                    Iniciar sesión
                </Button>
                <Button
                    className="bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => signup(values)}>
                    Registrarse
                </Button>
                <Button 
                    className="bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={googleLogin}>
                    Ingresa con Google
                </Button>
            </form>
        </div>
    )
}

export default LoginForm
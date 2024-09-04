'use client'
import { useState } from 'react'
import Button from "@/components/Button"

const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25'>
            <form onSubmit={handleSubmit} className='bg-white py-4 px-6 rounded-xl max-w-md w-full'>
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                />
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm
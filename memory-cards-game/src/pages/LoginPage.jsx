import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

export default function LoginPage() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const login = useAuthStore((state) => state.login)

    const onSubmit = (data) => {
        const usersString = localStorage.getItem('users')

        if (!usersString) {
            alert('❌ Помилка: Немає зареєстрованих користувачів.')
            return
        }

        const users = JSON.parse(usersString)
        const foundUser = users.find(user => user.username === data.username)

        if (foundUser && foundUser.password === data.password) {
            alert(`✅ Вхід успішний!\nВітаємо, ${foundUser.username}!`)
            localStorage.setItem('loggedInUser', JSON.stringify(foundUser))

            login(foundUser);
            navigate('/')
        } else {
            alert('❌ Помилка: Неправильне ім’я користувача або пароль.')
        }
    }

    return (
        <section className="page login">
            <form onSubmit={handleSubmit(onSubmit)} className="register-form form-container">
                <h2>👤 Вхід</h2>
                <label>Ім’я користувача</label>
                <input {...register('username', { required: true })} type="text" placeholder="Ім’я користувача" />
                <label>Пароль</label>
                <input {...register('password', { required: true })} type="password" placeholder="Пароль" />
                <Button type="submit" style={{marginTop: '1rem'}}>Увійти</Button>
            </form>
            <Button onClick={() => navigate('/')}>⬅ Назад</Button>
        </section>
    )
}
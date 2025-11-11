import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

export default function LoginPage({ onLoginSuccess, onBack }) {
    const { register, handleSubmit } = useForm()

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

            onLoginSuccess(foundUser)
        } else {
            alert('❌ Помилка: Неправильне ім’я користувача або пароль.')
        }
    }

    return (
        <section className="page login">
            <h2>👤 Вхід</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                <input {...register('username', { required: true })} placeholder="Ім’я користувача" />
                <input {...register('password', { required: true })} type="password" placeholder="Пароль" />
                <Button type="submit">Увійти</Button>
            </form>
            <Button onClick={onBack}>⬅ Назад</Button>
        </section>
    )
}
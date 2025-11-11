import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

export default function RegisterPage({ onBack }) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    const usersString = localStorage.getItem('users')
    const users = usersString ? JSON.parse(usersString) : []

    const userExists = users.find(user => user.username === data.username)
    if (userExists) {
        alert('❌ Користувач з таким ім’ям вже існує!')
        return
    }

    const newUsers = [...users, data]

    localStorage.setItem('users', JSON.stringify(newUsers))
    alert(`✅ Реєстрація успішна!\nВітаємо, ${data.username}!`)
    reset()
    onBack?.()
  }

  return (
    <section className="page register">
        <h2>👤 Реєстрація</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            <input {...register('username', { required: true })} placeholder="Ім’я користувача" />
            <input {...register('email', { required: true })} type="email" placeholder="Email" />
            <input {...register('password', { required: true })} type="password" placeholder="Пароль" />
            <Button type="submit">Зареєструватися</Button>
        </form>
        <Button onClick={onBack}>⬅ Назад</Button>
    </section>
  )
}

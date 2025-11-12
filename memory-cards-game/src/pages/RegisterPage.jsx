import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

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
    navigate('/login')
  }

  return (
    <section className="page register">
        <form onSubmit={handleSubmit(onSubmit)} className="register-form form-container">
            <h2>👤 Реєстрація</h2>
            <label>Ім’я користувача</label>
            <input {...register('username', { required: true })} type="text" placeholder="Ім’я користувача" />
            <label>Email</label>
            <input {...register('email', { required: true })} type="email" placeholder="Email" />
            <label>Пароль</label>
            <input {...register('password', { required: true })} type="password" placeholder="Пароль" />
            <Button type="submit" style={{marginTop: '1rem'}}>Зареєструватися</Button>
        </form>
        <Button onClick={() => navigate('/')}>⬅ Назад</Button>
    </section>
  )
}

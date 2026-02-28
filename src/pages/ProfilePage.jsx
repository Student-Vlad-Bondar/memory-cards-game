import React from 'react';
import { useParams } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const { username } = useParams()
  const { currentUser } = useAuthStore()
  const navigate = useNavigate()

  if (!currentUser || currentUser.username !== username) {
    return (
      <section className="page">
        <h2>Помилка</h2>
        <p>Ви не можете переглядати цей профіль.</p>
        <Button onClick={() => navigate('/')}>На головну</Button>
      </section>
    );
  }

  return (
    <section className="page profile-page">
      <h2>👤 Мій Профіль</h2>
      <p><strong>Ім'я користувача:</strong> {currentUser.username}</p>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <Button onClick={() => navigate(-1)}>⬅ Назад</Button>
    </section>
  );
}
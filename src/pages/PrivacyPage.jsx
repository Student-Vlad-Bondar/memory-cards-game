import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookieStore } from '../stores/cookieStore';
import Button from '../components/Button';

export default function PrivacyPage() {
  const navigate = useNavigate();
  const { resetConsent } = useCookieStore();

  const handleReset = () => {
    if (window.confirm('Ви впевнені, що хочете скинути налаштування конфіденційності? Банер згоди з’явиться знову.')) {
      resetConsent();
      alert('Налаштування скинуто.');
      navigate('/');
    }
  };

  return (
    <section className="page privacy-page" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1>🔒 Політика конфіденційності та використання Cookie</h1>
      <p className="muted">Останнє оновлення: 28 лютого 2026 року</p>

      <hr style={{ border: '0', borderTop: '1px solid var(--grey-light)', margin: '2rem 0' }} />

      <section>
        <h3>1. Загальні положення</h3>
        <p>
          Цей проєкт ("Memory Cards Game") створено в межах навчальної дисципліни "Компонентно-орієнтоване програмування". 
          Ми серйозно ставимося до захисту ваших даних і дотримуємося вимог <strong>GDPR (General Data Protection Regulation)</strong>.
          Усі ваші дані обробляються виключно на вашому пристрої (Client-side).
        </p>
      </section>

      <section>
        <h3>2. Які технології ми використовуємо</h3>
        <p>Для забезпечення роботи гри ми використовуємо два типи локального зберігання:</p>
        <ul>
          <li><strong>HTTP Cookies:</strong> Для ідентифікації сесії та збереження налаштувань.</li>
          <li><strong>Local Storage:</strong> Для зберігання великих обсягів даних, як-от історія ігор.</li>
        </ul>
      </section>

      <section>
        <h3>3. Детальний опис файлів Cookie (Transparency)</h3>
        <table className="results-table" style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Назва</th>
              <th>Тип</th>
              <th>Мета</th>
              <th>Термін дії</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>session_user</code></td>
              <td>Essential</td>
              <td>Зберігає дані про поточного увійшовшого користувача (авторизація).</td>
              <td>7 днів</td>
            </tr>
            <tr>
              <td><code>settings_[user]</code></td>
              <td>Essential</td>
              <td>Зберігає ваші налаштування (складність, швидкість, режим).</td>
              <td>30 днів</td>
            </tr>
            <tr>
              <td><code>memory_game_consent_status</code></td>
              <td>Essential</td>
              <td>Запам'ятовує ваш вибір у банері згоди (Accepted/Declined).</td>
              <td>365 днів</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>4. Статистичні дані (Local Storage)</h3>
        <p>
          Якщо ви надали згоду на збір статистики, результати ваших ігор (кількість ходів, час, дата) 
          зберігаються в <code>Local Storage</code> під ключем <code>gameResults_[user]</code>. 
          Якщо ви відхилили статистичні кукі, ці дані <strong>не записуватимуться</strong>.
        </p>
      </section>

      <section>
        <h3>5. Ваші права згідно з GDPR</h3>
        <ul>
          <li><strong>Право на доступ:</strong> Ви можете бачити всі свої дані на сторінках "Профіль" та "Результати".</li>
          <li><strong>Право на видалення (забуття):</strong> Ви можете очистити історію ігор у налаштуваннях або видалити акаунт.</li>
          <li><strong>Право на відкликання згоди:</strong> Ви можете будь-коли змінити свій вибір.</li>
        </ul>
      </section>

      <div style={{ 
        background: 'var(--bg)', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        marginTop: '2rem',
        border: '1px solid var(--grey-light)' 
      }}>
        <h4>Керування згодою</h4>
        <p>Бажаєте змінити налаштування або знову побачити Cookie-банер?</p>
        <Button onClick={handleReset} style={{ backgroundColor: '#e53e3e', color: 'white' }}>
          Скинути вибір Cookie
        </Button>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <Button onClick={() => navigate('/')} style={{ background: 'var(--accent)', color: 'white' }}>На головну</Button>
      </div>
    </section>
  );
}
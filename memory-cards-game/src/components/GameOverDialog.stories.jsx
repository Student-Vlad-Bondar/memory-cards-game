import GameOverDialog from './GameOverDialog';
import { MemoryRouter } from 'react-router-dom';
import '../styles/globals.css';

export default {
  title: 'Overlays/GameOverDialog',
  component: GameOverDialog,
  tags: ['autodocs'],
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  parameters: {
    docs: {
      inlineStories: false, // Відображати у фреймі, щоб не перекривати всю сторінку Docs
      iframeHeight: 350,
    },
  },
  argTypes: {
    isOpen: { name: 'Відкрито', control: 'boolean', description: 'Чи відображається діалог' },
    moves: { name: 'Ходи', control: 'number', description: 'Кількість зроблених ходів' },
    isTwoPlayers: { name: 'Режим 2 гравців', control: 'boolean', description: 'Зміна логіку підрахунку для двох' },
    currentUser: { name: 'currentUser', control: 'object', description: 'Об’єкт з даними поточного користувача' },
    scores: { name: 'Очки', control: 'object', description: 'Рахунок для обох гравців' },
    onRestart: { action: 'restarted', name: 'onRestart', description: 'Функція для скидання гри' }
  }
};

export const SingleWin = {
  args: {
    isOpen: true,
    moves: 15,
    isTwoPlayers: false,
    currentUser: { username: 'Alex' },
    scores: { 1: 4}
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};
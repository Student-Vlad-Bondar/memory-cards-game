import GameBoard from './GameBoard';
import '../index.css';

export default {
  title: 'Game/GameBoard',
  component: GameBoard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Сітка ігрового поля, що керує розташуванням та станом карток.',
      },
    },
  },
  argTypes: {
    cards: { 
        description: 'Масив об’єктів карток (кожна має uid та label)', 
        table: {
            type: { summary: 'array' },
            defaultValue: { summary: '[]' },
        },
        control: 'object'
    }, 
    flipped: { 
        description: 'Масив індексів перевернутих карток' ,
        table: {
            type: { summary: 'array' },
            defaultValue: { summary: '[]' },
        },
        control: 'object'
    },
    matched: { 
        description: 'Масив індексів знайдених пар', 
        table: {
            type: { summary: 'array' },
            defaultValue: { summary: '[]' },
        },
        control: 'object'
    },
    onFlip: { 
        action: 'flipped', 
        description: 'Функція, що викликається при кліку',
        table: {
            type: { summary: 'function' }
        }
    }
  }
};

const demoCards = [
  { uid: '1', label: '🍎' }, { uid: '2', label: '🍎' },
  { uid: '3', label: '🍌' }, { uid: '4', label: '🍌' },
  { uid: '5', label: '🍇' }, { uid: '6', label: '🍇' },
  { uid: '7', label: '🍒' }, { uid: '8', label: '🍒' },
];

export const NewGame = { args: { cards: demoCards, flipped: [], matched: [] } };
export const OneSelected = { args: { cards: demoCards, flipped: [0], matched: [] } };
export const PairSelected = { args: { cards: demoCards, flipped: [0, 1], matched: [] } };
export const SomeMatched = { args: { cards: demoCards, flipped: [], matched: [2, 3] } };
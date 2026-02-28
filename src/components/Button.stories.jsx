import Button from './Button';
import '../styles/globals.css';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Універсальний компонент кнопки для основних дій у грі.',
      },
    },
  },
  argTypes: {
    children: { name: 'Текст', control: 'text', description: 'Текст або елементи всередині кнопки' },
    size: { 
      name: 'Розмір', 
      control: 'select', 
      options: ['sm', 'md', 'lg'], 
      description: 'Розмір кнопки (sm, md, lg)' 
    },
    disabled: { name: 'Заблоковано', control: 'boolean', description: 'Стан доступності кнопки' },
    style: { name: 'Стилі', control: 'object', description: 'Об’єкт інлайнових стилів' },
    onClick: { action: 'clicked', name: 'onClick', description: 'Функція обробки кліку' }
  }
};

export const Primary = { args: { children: 'Грати', size: 'md', style: { background: '#4a90e2', color: 'white' } } };
export const Danger = { args: { children: 'Видалити дані', size: 'md', style: { background: '#e74c3c', color: 'white' } } };
export const Success = { args: { children: 'Готово', size: 'lg', style: { background: '#2ecc71', color: 'white' } } };
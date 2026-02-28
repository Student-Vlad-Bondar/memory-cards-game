import Card from './Card';
import '../styles/globals.css';

export default {
  title: 'Game/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Ігрова картка з підтримкою станів перевороту та знайденої пари.',
      },
    },
  },
  argTypes: {
    label: { name: 'Символ', control: 'text', description: 'Символ або емодзі на картці' },
    isFlipped: { name: 'Перевернута', control: 'boolean', description: 'Чи повернута картка обличчям' },
    isMatched: { name: 'Знайдено пару', control: 'boolean', description: 'Чи знайдена пара для цієї картки (якщо знайдена пара, то картка автоматично не перевертається у грі)' },
    onClick: { action: 'clicked', name: 'onClick', description: 'Функція кліку по картці' }
  }
};

export const BackSide = { args: { label: '🍎', isFlipped: false, isMatched: false } };
export const FrontSide = { args: { label: '🍎', isFlipped: true, isMatched: false } };
export const Matched = { args: { label: '🍎', isFlipped: true, isMatched: true } };
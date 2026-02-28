import SettingsForm from './SettingsForm';
import '../styles/globals.css';

export default {
  title: 'Forms/SettingsForm',
  component: SettingsForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Форма налаштування складності гри та швидкості анімації.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
    defaultValues: { name: 'Початкові дані', control: 'object' }
  },
  // Це змушує React Hook Form оновлюватися при зміні контролів Storybook
  render: (args) => <SettingsForm {...args} key={JSON.stringify(args.defaultValues)} />
};

export const Easy = { args: { defaultValues: { difficulty: 'easy', speed: 1000, twoPlayers: false } } };
export const HardMode = { args: { defaultValues: { difficulty: 'hard', speed: 400, twoPlayers: false } } };
export const DuoSession = { args: { defaultValues: { difficulty: 'medium', speed: 800, twoPlayers: true } } };
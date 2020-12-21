import { action } from '@storybook/addon-actions';

export const items1: { onClick: () => void }[] = [
  { onClick: action('clicked') },
];

export const items2: { key: number; value: string }[] = [
  { key: 0, value: 'item_name' },
];

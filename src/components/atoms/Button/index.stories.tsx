import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, InfoButton, PrimaryButton, WarningButton } from '.';

export default {
  title: 'Atoms/Button',
};

export const Default: FC = () => (
  <Button onClick={action('clicked')}>Default</Button>
);
export const Primary: FC = () => (
  <PrimaryButton onClick={action('clicked')}>Primary</PrimaryButton>
);
export const Info: FC = () => (
  <InfoButton onClick={action('clicked')}>Info</InfoButton>
);
export const Warning: FC = () => (
  <WarningButton onClick={action('clicked')}>Warning</WarningButton>
);

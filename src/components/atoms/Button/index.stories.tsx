import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, InfoButton, PrimaryButton, WarningButton } from '.';

export default {
  title: 'Atoms/Button',
};

export const Default = (): JSX.Element => (
  <Button onClick={action('clicked')}>Default</Button>
);
export const Primary = (): JSX.Element => (
  <PrimaryButton onClick={action('clicked')}>Primary</PrimaryButton>
);
export const Info = (): JSX.Element => (
  <InfoButton onClick={action('clicked')}>Info</InfoButton>
);
export const Warning = (): JSX.Element => (
  <WarningButton onClick={action('clicked')}>Warning</WarningButton>
);

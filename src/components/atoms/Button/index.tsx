import React, { FC } from 'react';
import style from './style.module.css';

type ButtonType = 'default' | 'primary' | 'info' | 'warning';

export type Props = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const buttonFactory = (type: ButtonType = 'default'): FC<Props> => {
  return ({
    children,
    onClick = () => {
      //
    },
    className,
    disabled = false,
  }) => {
    const hundleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onClick();
    };

    return (
      <button
        type="button"
        className={[style.button, style[type], className].join(' ')}
        onClick={hundleClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
};

export const Button = buttonFactory();
export const PrimaryButton = buttonFactory('primary');
export const InfoButton = buttonFactory('info');
export const WarningButton = buttonFactory('warning');

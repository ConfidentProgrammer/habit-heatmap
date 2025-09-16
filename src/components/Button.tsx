import React from 'react';

interface IButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  outline?: boolean;
}

const Button = ({ text, children, onClickHandler, color, outline }: IButtonProps) => {
  const buttonClasses = ['btn'];

  if (color) {
    buttonClasses.push(`btn-${color}`);
  }

  if (outline) {
    buttonClasses.push('btn-outline');
  }

  return (
    <button className={buttonClasses.join(' ')} onClick={onClickHandler}>
      {text}
      {children}{' '}
    </button>
  );
};

export default Button;

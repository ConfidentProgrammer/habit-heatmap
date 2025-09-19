import React from 'react';

interface IButtonProps {
  text: string;
  btnChildren?: React.ReactNode;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  buttonClasses: string;
}

const Button = ({ text, btnChildren, onClickHandler, buttonClasses }: IButtonProps) => {
  return (
    <button className={buttonClasses} onClick={onClickHandler}>
      {text}
      {btnChildren}{' '}
    </button>
  );
};

export default Button;

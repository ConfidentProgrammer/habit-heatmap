import React from 'react';

interface IButtonProps {
  text: string;
  children: React.ReactElement;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, children, onClickHandler }: IButtonProps) => {
  return (
    <button
      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 flex"
      onClick={onClickHandler}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

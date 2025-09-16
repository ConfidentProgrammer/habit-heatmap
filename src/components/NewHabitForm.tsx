import { useState } from 'react';
import Button from './Button';

interface INewHabitFormProps {
  handleNameChange: (name: string) => void;
}

const NewHabitForm = ({ handleNameChange }: INewHabitFormProps) => {
  const [name, setName] = useState<string>('');

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
        placeholder="Habit Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Button
        text="Add New Habit"
        onClickHandler={() => {
          handleNameChange(name);
          setName('');
        }}
      />
    </div>
  );
};

export default NewHabitForm;

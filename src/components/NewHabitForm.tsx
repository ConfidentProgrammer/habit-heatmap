import { useState } from 'react';

import Button from './Button';

interface INewHabitFormProps {
  handleNameChange: (name: string) => void;
}

const NewHabitForm = ({ handleNameChange }: INewHabitFormProps) => {
  const [name, setName] = useState<string>('');
  return (
    <div className="flex flex-col gap-6">
      <div className="title-desc flex flex-col">
        <h3 className="font-bold text-xl">Add a New Habit</h3>
        <p className="text-sm">What's one thing you want to do more consistently?</p>
      </div>
      <div className="form-field">
        <input
          type="text"
          className="bg-gray-50 border w-full border-green-500  text-sm rounded-md p-3 dark:placeholder-gray-400     focus:outline-none focus:border-green-500 focus:border-2 focus:shadow-lg transition duration-200 ease-in-out"
          placeholder="e.g, Medidate, Read, Workout"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <Button
        buttonClasses="btn p-3 rounded-md"
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

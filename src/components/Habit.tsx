import check from '../assets/check-circle.svg';
import bin from '../assets/trash-2.svg';

import type { IHabit } from '../types/habitTypes';
import Button from './Button';
import Tag from './Tag';
import Year from './Year';

interface IHabitProps {
  toggleDay: (id: number, date: Date) => void;
  id: number;
  habit: IHabit;
  handleDeleteHabit: (id: number) => void;
}

const Habit = ({ toggleDay, id, habit, handleDeleteHabit }: IHabitProps) => {
  const todaysDate = new Date();

  return (
    <>
      <div className="card bg-base-100 shadow-sm mt-10 mx-5">
        <div className="card-body">
          <h2 className="card-title text-xl">
            {' '}
            {habit.name} <Tag text="28 Day streak" />
            <img onClick={() => handleDeleteHabit(id)} className="cursor-pointer" src={bin} height={20} width={20} />
          </h2>
          <div className="year-container flex justify-between">
            <Year progress={habit.progress} theme={habit.dataTheme} />
          </div>{' '}
          <div className="flex justify-end">
            <Button text="Mark Done" onClickHandler={() => toggleDay(id, todaysDate)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Habit;

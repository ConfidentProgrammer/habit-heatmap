import Tag from './Tag';
import Year from './Year';
import check from '../assets/check-circle.svg';
import bin from '../assets/trash-2.svg';
import Button from './Button';
interface IHabitProps {
  toggleDay: (id: number, date: Date) => void;
  id: number;
  habit: IHabit;
  handleDeleteHabit: (id: number) => void;
}

interface IHabit {
  id: number;
  name: string;
  progress: Record<string, boolean>;
}

const Habit = ({ toggleDay, id, habit, handleDeleteHabit }: IHabitProps) => {
  const todaysDate = new Date();

  return (
    <div className="m-6 bg-[#f6f6f7] p-6 shadow-lg rounded-lg">
      <div className="heading flex m-2">
        <p className="text-2xl font-medium mr-2 primary-text">{habit.name}</p>
        <Tag text="28 Day streak" />
      </div>

      <div className="year-container flex justify-between">
        <Year progress={habit.progress} />
        <div className="btn-container flex flex-col justify-between">
          <div className="flex justify-end">
            {' '}
            <img onClick={() => handleDeleteHabit(id)} className="cursor-pointer" src={bin} height={20} width={20} />
          </div>
          <Button
            text={'Mark Done'}
            children={<img className="ml-1" src={check} height={15} width={15} />}
            onClickHandler={() => toggleDay(id, todaysDate)}
          />
        </div>
      </div>
    </div>
  );
};

export default Habit;

import Tag from './Tag';
import Year from './Year';
import check from '../assets/check-circle.svg';
interface IHabitProps {
  toggleDay: (id: number, date: Date) => void;
  id: number;
  habit: IHabit;
}

interface IHabit {
  id: number;
  name: string;
  progress: Record<string, boolean>;
}

const Habit = ({ toggleDay, id, habit }: IHabitProps) => {
  const todaysDate = new Date();

  return (
    <div className="m-6 bg-[#f6f6f7] p-6 shadow-lg rounded-lg">
      <div className="heading flex m-2">
        <p className="text-2xl font-medium mr-2 primary-text">{habit.name}</p>
        <Tag text="28 Day streak" />
      </div>

      <div className="year-container flex justify-between">
        <Year progress={habit.progress} />
        <div className="btn-container flex flex-col justify-end">
          <button
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 flex"
            onClick={() => toggleDay(id, todaysDate)}
          >
            Mark Done
            <img className="ml-1" src={check} height={15} width={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Habit;

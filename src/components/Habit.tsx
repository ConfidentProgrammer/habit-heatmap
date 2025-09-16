import Tag from './Tag';
import Year from './Year';

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

      <button
        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        onClick={() => toggleDay(id, todaysDate)}
      >
        Daily Check-in: {todaysDate.toDateString()}
      </button>
      <Year progress={habit.progress} />
    </div>
  );
};

export default Habit;

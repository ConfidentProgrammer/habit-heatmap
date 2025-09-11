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
    <div className="m-6 border-1">
      <p className="text-2xl">{habit.name}</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => toggleDay(id, todaysDate)}
      >
        Daily Check-in: {todaysDate.toDateString()}
      </button>
      <Year progress={habit.progress} />
    </div>
  );
};

export default Habit;

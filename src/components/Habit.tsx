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
      <p className="text-2xl">{'Workout Test'}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => toggleDay(id, todaysDate)}
      >
        Daily Check-in: {todaysDate.toDateString()}
      </button>
      <Year progress={habit.progress} />
    </div>
  );
};

export default Habit;

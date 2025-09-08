import { useCallback, useState } from 'react';
import Year from './Year';

interface IHabit {
  id: number;
  name: string;
  progress: Record<string, boolean>;
}

const Habit = () => {
  const [progress, setProgress] = useState<IHabit>({
    id: 1,
    name: 'Workout',
    progress: {},
  });

  const todaysDate = new Date();

  const toggleDay = useCallback((date: Date) => {
    const dateString = date.toDateString();

    setProgress((prev) => {
      const currentDate = prev.progress[dateString] ?? false;
      const newValue = !currentDate;
      const newProgress = { ...prev.progress };
      newProgress[dateString] = newValue;
      return {
        ...prev,
        progress: newProgress,
      };
    });
  }, []);

  return (
    <div className="m-6 border-1">
      <p className="text-2xl">{progress.name}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => toggleDay(todaysDate)}
      >
        Daily Check-in: {todaysDate.toDateString()}
      </button>
      <Year progress={progress.progress} />
    </div>
  );
};

export default Habit;

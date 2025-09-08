import { useState } from 'react';
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

  const toggleDay = (date: Date) => {
    const dateString = date.toDateString();
    const currentDate = progress.progress[dateString] ?? false;
    const newValue = !currentDate;

    setProgress((prev) => {
      const newProgress = { ...prev.progress };
      newProgress[dateString] = newValue;
      return {
        ...prev,
        progress: newProgress,
      };
    });
  };

  return (
    <div className="m-6 border-1">
      <p className="text-2xl">{progress.name}</p>
      <Year toggleDay={toggleDay} progress={progress.progress} />
    </div>
  );
};

export default Habit;

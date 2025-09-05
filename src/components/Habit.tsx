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

  return (
    <div>
      {' '}
      <Year />
    </div>
  );
};

export default Habit;

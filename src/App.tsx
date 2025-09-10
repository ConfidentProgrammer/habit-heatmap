import Habit from './components/Habit';

import './App.css';
import { useCallback, useState } from 'react';

interface IHabit {
  id: number;
  name: string;
  progress: Record<string, boolean>;
}

function App() {
  const [habitsProgress, setHabitsProgress] = useState<IHabit[]>([
    {
      id: 1,
      name: 'workout',
      progress: {},
    },
  ]);

  const defaultHabit: IHabit = {
    id: -1,
    name: 'default Habit',
    progress: {},
  };

  console.log(habitsProgress);
  const toggleDay = useCallback((id: number, date: Date) => {
    setHabitsProgress((prev) => {
      const dateString = date.toDateString();

      const replacedHabits = prev.map((habit) => {
        if (habit.id == id) {
          const currentValue = habit.progress[dateString] ?? false;
          const newValue = !currentValue;
          const newProgress = { ...habit.progress };
          newProgress[dateString] = newValue;
          return {
            ...habit,
            progress: newProgress,
          };
        }

        return habit;
      });
      return replacedHabits;
    });
  }, []);

  return (
    <>
      <Habit id={1} toggleDay={toggleDay} habit={habitsProgress.find((h) => h.id === 1) ?? defaultHabit} />
    </>
  );
}

export default App;

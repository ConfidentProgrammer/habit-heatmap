import Habit from './components/Habit';

import './App.css';
import { useCallback, useEffect, useState } from 'react';
import NewHabitForm from './components/NewHabitForm';
import { loadHabits, saveHabits } from './storage/persistence';
import type { IHabit } from './types/habitTypes';

function App() {
  const [habitsProgress, setHabitsProgress] = useState<IHabit[]>(() => loadHabits());

  useEffect(() => {
    saveHabits(habitsProgress);
  }, [habitsProgress]);
  const handleNameChange = (name: string) => {
    const newHabit: IHabit = {
      id: new Date().getTime(),
      name: name,
      progress: {},
    };

    setHabitsProgress((prev) => [...prev, newHabit]);
  };

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
    <div className="border-1">
      <NewHabitForm handleNameChange={handleNameChange} />
      {habitsProgress.map((habit) => (
        <Habit key={habit.id} id={habit.id} toggleDay={toggleDay} habit={habit} />
      ))}
    </div>
  );
}

export default App;

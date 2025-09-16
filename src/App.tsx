import { useCallback, useEffect, useState } from 'react';

import Habit from './components/Habit';
import NewHabitForm from './components/NewHabitForm';
import { loadHabits, saveHabits } from './storage/persistence';

import './App.css';

import type { IHabit } from './types/habitTypes';
import { getRandomTheme } from './utils/utils';

function App() {
  const [habitsProgress, setHabitsProgress] = useState<IHabit[]>(() => loadHabits());

  useEffect(() => {
    saveHabits(habitsProgress);
  }, [habitsProgress]);

  const handleNameChange = (name: string) => {
    if (name === '') {
      return;
    }
    const newHabit: IHabit = {
      id: new Date().getTime(),
      name: name,
      progress: {},
      dataTheme: getRandomTheme(),
    };

    setHabitsProgress((prev) => [...prev, newHabit]);
  };

  const handleDeleteHabit = (id: number) => {
    setHabitsProgress((prev) => prev.filter((habit) => habit.id !== id));
  };

  const toggleDay = useCallback((id: number, date: Date) => {
    setHabitsProgress((prev) => {
      const dateString = date.toDateString();

      const replacedHabits = prev.map((habit) => {
        if (habit.id === id) {
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
    <div className="bg-base-200 p-10" data-theme="light">
      <p className="text-3xl font-semibold text-shadow-neutral-content text-center my-4">Your 2024 Habits</p>
      <NewHabitForm handleNameChange={handleNameChange} />
      <div className="habits-container flex flex-wrap justify-center">
        {habitsProgress.map((habit) => (
          <Habit
            key={habit.id}
            id={habit.id}
            toggleDay={toggleDay}
            handleDeleteHabit={handleDeleteHabit}
            habit={habit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

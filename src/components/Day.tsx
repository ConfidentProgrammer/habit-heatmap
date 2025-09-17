import React from 'react';
import type { IHabit } from '../types/habitTypes';

interface IDayProps {
  date: Date;
  isDone: boolean;
  toggleDay: (id: number, todayDate: Date) => void;
  habit: IHabit;
}
function Day({ date, isDone, toggleDay, habit }: IDayProps) {
  const todayDate = new Date();
  const dimensions = '12px';

  todayDate.setHours(0, 0, 0, 0);

  if (date === null) {
    return <div className={`w-[${dimensions}] h-[${dimensions}] m-[1px]`}></div>;
  }

  const getBackgroundColor = () => {
    if (isDone) {
      return 'bg-green-500';
    } else if (date < todayDate) {
      return 'bg-gray-400';
    }
    return 'bg-gray-200';
  };
  const showAnimation = (): boolean => {
    return date.toDateString() === todayDate.toDateString() && !isDone;
  };

  return (
    <>
      <div className="tooltip block" data-tip={date.toDateString()}>
        {showAnimation() ? <span className="absolute inline-flex h-full w-full "></span> : ''}
        <div
          onClick={() => toggleDay(habit.id, date)}
          className={`w-[${dimensions}] h-[${dimensions}] m-[1px] rounded-xs ${getBackgroundColor()} transition delay-100 duration-100 ease-in-out hover:scale-110 ${
            showAnimation() ? 'motion-safe:animate-ping bg-green-500 opacity-50' : ''
          }`}
        ></div>
      </div>
    </>
  );
}

export default React.memo(Day, (prevProps, nextProps) => {
  // had to write the custom comparator because props are getting the new date everytime component re-render. shallow copy was recognising the date as new object
  return prevProps.isDone == nextProps.isDone;
});

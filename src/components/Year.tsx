import type { IHabit } from '../types/habitTypes';
import Day from './Day';

interface IYearProps {
  progress: Record<string, boolean>;
  theme: string;
  habit: IHabit;
  toggleDay: (id: number, todayDate: Date) => void;
  dateGrid: Date[][];
}

function Year({ progress, habit, toggleDay, dateGrid }: IYearProps) {
  return (
    <div className="year-container flex">
      {dateGrid.map((week) => {
        return (
          <div className="week-container" key={week[week.length - 1].getTime()}>
            {week.map((date, idx) =>
              date ? (
                <Day
                  toggleDay={toggleDay}
                  habit={habit}
                  key={date.getTime()}
                  date={date}
                  isDone={progress[date.toDateString()] ?? false}
                />
              ) : (
                <Day toggleDay={toggleDay} habit={habit} key={`filler-${idx}`} date={date} isDone={false} />
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Year;

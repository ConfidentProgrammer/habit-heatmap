import { generateGridForHeatmap } from '../utils/utils';
import Day from './Day';

interface IYearProps {
  progress: Record<string, boolean>;
}

function Year({ progress }: IYearProps) {
  const year = new Date().getFullYear();
  const dateGrid = generateGridForHeatmap(year);
  return (
    <div className="year-container flex">
      {dateGrid.map((week) => {
        return (
          <div className="week-container" key={week[week.length - 1].getTime()}>
            {week.map((date, idx) =>
              date ? (
                <Day key={date.getTime()} date={date} isDone={progress[date.toDateString()] ?? false} />
              ) : (
                <Day key={`filler-${idx}`} date={date} isDone={false} />
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Year;

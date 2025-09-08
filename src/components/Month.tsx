import { generateDate, isLeapYear, type IMonth } from '../utils/utils';
import Day from './Day/Day';
interface MonthProps {
  month: IMonth;
  toggleDay: (date: Date) => void;
  progress: Record<string, boolean>;
}

function Month({ month, toggleDay, progress }: MonthProps) {
  const year = new Date().getFullYear();
  const isLeap = isLeapYear(year);

  const noOfDays = month.name === 'February' ? (isLeap ? 29 : 28) : month.days;
  return (
    <div className="flex flex-wrap m-1 w-32">
      {[...Array(noOfDays)].map((_, i) => {
        const generatedDate = generateDate(year, month.index, i + 1);
        return (
          <Day
            key={generatedDate.getTime()}
            date={generatedDate}
            toggleDay={toggleDay}
            isDone={progress[generatedDate.toDateString()] ?? false}
          />
        );
      })}
    </div>
  );
}

export default Month;

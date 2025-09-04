import { isLeapYear, type IMonth } from '../utils/utils';
import Day from './Day/Day';
interface MonthProps {
  month: IMonth;
}

function Month({ month }: MonthProps) {
  const year = new Date().getFullYear();
  const isLeap = isLeapYear(year);

  const noOfDays = month.name === 'February' ? (isLeap ? 29 : 28) : month.days;

  return (
    <div className="flex flex-wrap m-1 w-32">
      {[...Array(noOfDays)].map((i) => (
        <Day key={i} />
      ))}
    </div>
  );
}

export default Month;

import { monthMap } from '../utils/utils';

import Month from './Month';

interface IYearProps {
  toggleDay: (date: Date) => void;
  progress: Record<string, boolean>;
}

function Year({ toggleDay, progress }: IYearProps) {
  return (
    <div className="flex flex-wrap">
      {monthMap.map((month) => {
        return (
          <div className="border-1 border-red-950" key={month.index}>
            <Month month={month} toggleDay={toggleDay} progress={progress} />
            {month.name}
          </div>
        );
      })}
    </div>
  );
}

export default Year;

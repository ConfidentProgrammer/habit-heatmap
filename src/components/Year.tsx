import { monthMap } from '../utils/utils';

import Month from './Month';

interface IYearProps {
  progress: Record<string, boolean>;
}

function Year({ progress }: IYearProps) {
  return (
    <div className="flex flex-wrap">
      {monthMap.map((month) => {
        return (
          <div className="border-1 border-red-950" key={month.index}>
            <Month month={month} progress={progress} />
            {month.name}
          </div>
        );
      })}
    </div>
  );
}

export default Year;

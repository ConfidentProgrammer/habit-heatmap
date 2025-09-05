import { monthMap } from '../utils/utils';

import Month from './Month';

function Year() {
  return (
    <div className="flex flex-wrap border-1 ">
      {monthMap.map((month) => {
        return (
          <div className="border-1 border-red-950">
            <Month month={month} key={month.name} />
            {month.name}
          </div>
        );
      })}
    </div>
  );
}

export default Year;

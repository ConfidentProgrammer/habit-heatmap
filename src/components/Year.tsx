import { monthMap } from '../utils/utils';

import Month from './Month';

function Year() {
  return (
    <div className="flex flex-wrap border-1 ">
      {monthMap.map((month) => (
        <Month month={month} key={month.name} />
      ))}
    </div>
  );
}

export default Year;

import React from 'react';

interface IDayProps {
  date: Date;
  isDone: boolean;
}
function Day({ date, isDone }: IDayProps) {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  if (date === null) {
    return <div className="w-[12px] h-[12px] m-[1px]"></div>;
  }
  return (
    <div
      className={` w-[12px] h-[12px] m-[1px] ${
        isDone ? 'bg-green-600' : date < todayDate ? 'bg-gray-400' : 'border-1 border-gray-300 bg-[#F8F8F8]'
      }`}
    ></div>
  );
}

export default React.memo(Day, (prevProps, nextProps) => {
  // had to write the custom comparator because props are getting the new date everytime component re-render. shallow copy was recognising the date as new object
  return prevProps.isDone == nextProps.isDone;
});

import React from 'react';

interface IDayProps {
  date: Date;
  isDone: boolean;
}
function Day({ date, isDone }: IDayProps) {
  console.log('day rendered');
  return (
    <div
      className={`border-1 border-solid w-4 h-4 ${isDone ? 'bg-green-600' : date < new Date() ? 'bg-gray-400' : ''}`}
    ></div>
  );
}

export default React.memo(Day, (prevProps, nextProps) => {
  // had to write the custom comparator because props are getting the new date everytime component re-render. shallow copy was recognising the date as new object
  return prevProps.isDone == nextProps.isDone;
});

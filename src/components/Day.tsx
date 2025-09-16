import React from 'react';

interface IDayProps {
  date: Date;
  isDone: boolean;
}
function Day({ date, isDone }: IDayProps) {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  if (date === null) {
    return <div className="w-[10px] h-[10px] m-[1px]"></div>;
  }
  const getBackgroundColor = () => {
    if (isDone) {
      return 'bg-primary';
    }
    return 'bg-base-300';
  };

  return (
    <>
      <div className="tooltip block" data-tip={date.toDateString()}>
        <div className={`w-[10px] h-[10px] m-[1px] rounded-xs ${getBackgroundColor()}`}></div>
      </div>
    </>
  );
}

export default React.memo(Day, (prevProps, nextProps) => {
  // had to write the custom comparator because props are getting the new date everytime component re-render. shallow copy was recognising the date as new object
  return prevProps.isDone == nextProps.isDone;
});

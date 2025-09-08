interface IDayProps {
  date: Date;
  toggleDay: (date: Date) => void;
  isDone: boolean;
}
function Day({ date, toggleDay, isDone }: IDayProps) {
  return (
    <div
      className={`border-1 border-solid w-4 h-4 ${isDone ? 'bg-green-600' : ''}`}
      onClick={() => toggleDay(date)}
    ></div>
  );
}

export default Day;

function Day({ date }) {
  return (
    <div
      className="border-1 border-solid w-4 h-4"
      onClick={() => {
        console.log(date);
      }}
    ></div>
  );
}

export default Day;

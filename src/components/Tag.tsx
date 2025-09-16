interface Itag {
  text: string;
}

const Tag = ({ text }: Itag) => {
  return (
    <div>
      <span className="text-[#7F8C8D] text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg bg-gray-200">{text}</span>
    </div>
  );
};

export default Tag;

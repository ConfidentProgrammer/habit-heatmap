interface Itag {
  text: string;
}

const Tag = ({ text }: Itag) => {
  return (
    <div>
      <span className="badge badge-soft bg-green-200 text-xs">{text}</span>
    </div>
  );
};

export default Tag;

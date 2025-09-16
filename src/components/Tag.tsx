interface Itag {
  text: string;
}

const Tag = ({ text }: Itag) => {
  return (
    <div>
      <span className="badge badge-soft badge-primary text-xs">{text}</span>
    </div>
  );
};

export default Tag;

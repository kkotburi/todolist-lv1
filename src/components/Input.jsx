const Input = ({ title, titleFunction, content, contentFunction }) => {
  return (
    <div className="input">
      제목:&nbsp; <input value={title} onChange={titleFunction} />
      내용:&nbsp; <input value={content} onChange={contentFunction} />
    </div>
  );
};

export default Input;

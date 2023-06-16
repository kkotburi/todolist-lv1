const Input = ({ title, titleChangeHander, content, contentChangeHander }) => {
  return (
    <div className="input">
      Title:&nbsp;{" "}
      <input
        className="input-title"
        value={title}
        onChange={titleChangeHander}
      />
      Content:&nbsp;{" "}
      <input
        className="input-content"
        value={content}
        onChange={contentChangeHander}
      />
    </div>
  );
};

export default Input;

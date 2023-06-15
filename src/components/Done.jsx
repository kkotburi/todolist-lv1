export default App;

function App() {
  const [count, setNum] = useState(0);

  const onClickPlus = () => {
    const plusCount = count + 1;
    setNum(plusCount);
  };

  return (
    <div className={{ textAlign: "center" }}>
      <div>{count}</div>
      <button onClick={onClickPlus}>+1</button>
    </div>
  );
}

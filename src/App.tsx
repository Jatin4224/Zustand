import useCounter from "./store";

const App = () => {
  const { count } = useCounter();
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>⬆️</button>
      <button onClick={decrement}>⬇️</button>
    </div>
  );
};

export default App;

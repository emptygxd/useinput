import { useInput } from "./shared/hooks/useInput";

function App() {
  const username = useInput("");
  return (
    <div>
      <h1>useInput</h1>
      <input
        type="text"
        value={username.value}
        onChange={username.onChange}
        onBlur={username.onBlur}
        placeholder="Enter your username"
      />
      {username.error && <span style={{ color: "red" }}>{username.error}</span>}
      <button onClick={username.clear}>Очистить</button>
    </div>
  );
}

export default App;

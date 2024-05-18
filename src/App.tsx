import { useInput } from './shared/hooks/useInput';

function App() {
  const { value, onChangeValue, onBlur, error, validationError, onClearValue } =
    useInput('');
  return (
    <div>
      <h1>useInput</h1>
      <input
        value={value}
        onChange={onChangeValue}
        onBlur={onBlur}
        placeholder="Enter your username"
        className={error || validationError ? 'errorInput' : ''}
      />
      {(error || validationError) && (
        <span className="error">{error || validationError}</span>
      )}
      <button onClick={onClearValue}>Очистить</button>
    </div>
  );
}

export default App;

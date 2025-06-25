import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);
  const toggleTheme = () => setIsDark(c => !c);

  return (
    <div
      className={`${isDark
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900'} min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300`}
    >
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Counter App</h1>
      <p className="text-2xl mb-6">Count: {count}</p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          ➕ Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          ➖ Decrement
        </button>
        <button
          onClick={reset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
        >
          🔁 Reset
        </button>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Switch to {isDark ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
}

export default App;

// App.tsx
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <main className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="inline-block h-24 p-6 hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]"></div>

      <h1 className="text-3xl font-bold underline">Tailwind up in here</h1>
      <h2 className="mt-4 text-2xl">Vite + React + TS</h2>
      <div className="mt-8">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
      </div>
    </main>
  );
}

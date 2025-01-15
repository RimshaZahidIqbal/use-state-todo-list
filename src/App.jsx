import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => setInputVal(e.target.value);

  return (
    <div className="flex items-center justify-center min-h-screen bg-app-blue-bg bg-cover bg-center px-4">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">Input Mirror</h2>
        <input
          type="text"
          value={inputVal}
          onChange={handleInputChange}
          placeholder="Type something here..."
          className="w-full  px-4 py-2 rounded-lg border-2 border-blue-200 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 shadow-lg bg-white text-black placeholder-gray-500 text-lg"
        />
        <h3 className="text-center mt-4 text-lg md:text-xl font-semibold text-black">You Typed:</h3>
        {inputVal && (
          <p className="text-blue-600 w-full text-xl sm:text-2xl md:text-3xl font-bold italic bg-white bg-opacity-75 px-4 py-2 m-2 rounded-lg shadow-md transition-all duration-300">
            {inputVal}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

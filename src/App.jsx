import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => setInputVal(e.target.value);

  const handleAddTodo = () => {
    if (inputVal.trim()) {
      setTodoList([...todoList, inputVal]);
      setInputVal('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-app-blue-bg bg-cover bg-center px-4">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">To-Do List</h2>

        {/* Input for new to-do item */}
        <div className="flex w-full mb-6">
          <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            className="w-full px-4 py-2 rounded-lg border-2 border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 shadow-lg bg-white text-black placeholder-gray-500 text-lg"
          />
          <button
            onClick={handleAddTodo}
            className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>

        {/* List of to-dos */}
        <div className="w-full space-y-4">
          {todoList.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white bg-opacity-75 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              <p className="text-black text-lg">{todo}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

export function TodoForm({ addTodo }: { addTodo: (task: string) => void }) {
  const [task, setTask] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (task.trim() === "") return;
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="bg-cover bg-center w-full flex flex-col items-center p-4">
      <div className="mt-9 flex items-center w-full max-w-xl bg-gray-100 dark:bg-gray-700 p-3 rounded-md shadow-md dark:border-gray-600">
        <input
          type="checkbox"
          disabled
          className="cursor-default mr-3 appearance-none w-6 h-6 rounded-full border-2 border-gray-500 checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-500 checked:border-blue-500 transition-all duration-500"
        />
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          name="task"
          id="task"
          type="text"
          className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
}

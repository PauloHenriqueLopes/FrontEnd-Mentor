import { useState } from "react";
import { TodoForm } from "./TodoForm";

interface TodoListProps {
    isDarkMode: boolean;
}

export function TodoList() {
    const [list, setList] = useState<{ text: string; completed: boolean }[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const addTodo = (task: string) => {
        setList((prevList) => [...prevList, { text: task, completed: false }]);
    };

    const toggleComplete = (index: number) => {
        setList((prevList) =>
            prevList.map((item, i) =>
                i === index ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const removeTodo = (index: number) => {
        setList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const clearCompleted = () => {
        setList((prevList) => prevList.filter((item) => !item.completed));
    };

    const showActive = () => {
        setFilter("active");
    };

    const showAll = () => {
        setFilter("all");
    };

    const filteredList = list.filter((item) => {
        if (filter === "active") return !item.completed;
        return true;
    });

    const allCompleted = list.length > 0 && list.every((item) => item.completed);

    const activeTasks = list.filter((item) => !item.completed).length;

    return (
        <div className="max-w-xl mx-auto mt-4 bg-white shadow-md rounded-md p-4 dark:bg-gray-800 dark:text-white">
            <TodoForm addTodo={addTodo} />

            <ul className="mt-4">
                {filteredList.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center p-2 border-b last:border-none dark:border-gray-600"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <input
                            type="checkbox"
                            id={`task-${index}`}
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                            className="cursor-pointer w-6 h-6 mr-3 appearance-none rounded-full border-2 border-gray-500 checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-500 transition-all duration-500"
                        />
                        <label htmlFor={`task-${index}`} className="cursor-pointer">
                            {todo.text}
                        </label>
                        {hoveredIndex === index && (
                            <button
                                onClick={() => removeTodo(index)}
                                className="ml-auto text-gray-500 hover:text-gray-700 transition-opacity duration-300 opacity-60 hover:opacity-100"
                            >
                                ✖
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm text-gray-600 dark:text-gray-400">
                <span>{activeTasks} items left</span>
                <div className="space-x-2">
                    <button
                        onClick={showAll}
                        className={`px-3 py-1 hover:text-blue-600 transition ${filter === "all" ? "text-blue-600" : ""}`}
                    >
                        All
                    </button>
                    <button
                        onClick={showActive}
                        className={`px-3 py-1 hover:text-blue-600 transition ${filter === "active" ? "text-blue-600" : ""}`}
                    >
                        Active
                    </button>
                    <button
                        disabled={allCompleted}
                        className={`px-3 py-1 transition cursor-default ${
                            allCompleted ? "text-blue-600" : "opacity-50"
                        }`}
                    >
                        Completed
                    </button>
                </div>
                <button
                    onClick={clearCompleted}
                    className="px-3 py-1 text-red-600 hover:text-red-800 transition"
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
}


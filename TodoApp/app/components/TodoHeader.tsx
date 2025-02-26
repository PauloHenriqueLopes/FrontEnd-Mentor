import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";

export function TodoHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode.toString());
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div
            className={`transition-all duration-500 h-64 w-full p-5 ${isDarkMode ? "bg-[url('/bg-desktop-dark.jpg')]" : "bg-[url('/bg-desktop-light.jpg')]"}`}
        >
            <div className="flex justify-between items-center px-10 py-6">
                <h1 className="text-white text-4xl font-bold tracking-widest uppercase cursor-default">
                    TODO
                </h1>
                
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    <img
                        src={isDarkMode ? "/icon-sun.svg" : "/icon-moon.svg"}
                        alt="darkMode"
                        className="w-6 h-6 cursor-pointer hover:opacity-85 hover:transition-all"
                    />
                </button>
            </div>
            <TodoList />
        </div>
    );
}


import React, { useState } from "react";

export default function TodoDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish landing page", completed: false },
    { id: 2, text: "Plan marketing strategy", completed: false },
    { id: 3, text: "Fix app bugs", completed: false },
    { id: 4, text: "Write blog post", completed: false },
    { id: 5, text: "Respond to emails", completed: false },
    { id: 6, text: "Design app icon", completed: false },
    { id: 7, text: "Review analytics", completed: false },
    { id: 8, text: "Update user guide", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer p-2 rounded-lg border ${
              task.completed
                ? "bg-green-100 line-through text-gray-500"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

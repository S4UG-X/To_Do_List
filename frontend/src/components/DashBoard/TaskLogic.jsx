import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TaskLogic (){

    let [Tasks, setTasks] = useState([ {name: "sampletask",id: uuidv4()    , isDone : false}])
    let [newValue, setNewValue] = useState("")

    const AddFunct = ()=>{
    
        setTasks([...Tasks, {name:newValue, id:uuidv4(), isDone:false}])
        setNewValue("")
    }
    const updateValue = (event)=>{
        setNewValue(event.target.value)
    }
    Tasks.push()
    const markOne = (id)=>{
        setTasks((preTask) =>
            preTask.map((task) => {
              return task.id == id ? {...task, isDone:true} : task;
            })
          );

    }
    const deleteList = (key)=>{
        // console.log("deleted: ", key)
       setTasks((preTask) => preTask.filter((task) => task.id != key));
      }
      const taskEdit = (key) => {
        // Find the task to edit
        const taskToEdit = Tasks.find((task) => task.id === key);
        if (taskToEdit) {
          setNewValue(taskToEdit.name);
          // Remove the task from the list temporarily
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== key));
        }
      }

    return (
        <div className="w-96 mx-auto mt-5 p-5 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-center text-lg font-semibold mb-4">To Do List</h3>
      
        <div className="adding flex gap-2 mb-4">
          <input 
            type="text" 
            value={newValue} 
            onChange={updateValue} 
            className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            onClick={AddFunct}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      
        <div className="showing">
          <ul className="space-y-2">
            {Tasks.map((task) => (
              <li 
                key={task.id} 
                className="flex justify-between items-center bg-white border border-gray-200 px-3 py-2 rounded"
              >
                <span className={task.isDone ? "line-through flex-1" : "flex-1"}>
                  {task.name}
                </span>
                <button 
                  onClick={() => markOne(task.id)} 
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ml-2"
                >
                  Done
                </button>
                <button onClick={()=>taskEdit(task.id)} className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 ml-2">
                    Edit
                </button >
                <button 
                  onClick={() => deleteList(task.id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    );
}
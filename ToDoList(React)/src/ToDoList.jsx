//import React imports the core react library,useState hook is imported from React
import React, { useState } from "react";

//define a functional component called ToDoList
function ToDoList() {
  //tasks- state variable that holds an array of sample tasks,setTasks- function that updates tasks,useState- initializes array of default tasks
  const [tasks, setTasks] = useState(["Eat BreakFast", "Code", "Pushups"]);
  //newTask- state variable to store that we typed,setNewtask- function to update task,useState("")- initializes newTask with empty string
  const [newTask, setNewTask] = useState("");

  //below function runs when user types in input field
  function handleInputChange(event) {
    //event.target.value- retrives the current text inside the input
    setNewTask(event.target.value); // updates the newtask with new input
  }

  function addTask() {
    // below if statement ensures the input is not empty using trim()
    if (newTask.trim() !== "") {
      //below line create a new array wth all previous tasks and adds the new task at end
      setTasks((t) => [...tasks, newTask]); //(t) means tasks as parameter
      setNewTask(""); //clears the input field
    }
  }

  function deleteTask(index) {
    //filter() to create new array excluding the task at index,i- represents index of current item
    const updatedTasks = tasks.filter((element, i) => i !== index);
    //(i !== index) means keeps all tasks expect the one we want to remove ,index is position of task that we want to remove
    setTasks(updatedTasks); //updates the state with new array
  }

  function moveTaskUp(index) {
    //below if statement prevents moving the first task up
    if (index > 0) {
      const updatedTasks = [...tasks]; //creates a copy of tasks array
      //Below Code Swaps the task at index with the task above it (index-1)
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks); //updates state with new order
    }
  }

  function moveTaskDown(index) {
    //below if statement prevents moving the last task down
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]; //creates a copy of tasks array
      //Below Code Swaps the current task with the task below it.
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks); //updates state
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text" //text input
          placeholder="Enter a Task...."
          value={newTask} //keeps input field controlled
          onChange={handleInputChange} //calls function when user types
        />
        {/*  below line calls function when clicked */}
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {/* below line use .map() to loop through tasks array */}
        {tasks.map((task, index) => (
          //key={index} identifies each task (important for React’s re-rendering)
          <li key={index}>
            {/*{task}- inserts task name */}
            <span className="text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

//export the file ,so it can be used in other files
export default ToDoList;

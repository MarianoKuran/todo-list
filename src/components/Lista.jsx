import React, { useState } from "react";
import Form from "./Form";
import Tarea from "./Tarea";
import "../styles/Lista.css";

function Lista() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((e) => e.id !== id);
    setTasks(updatedTasks);
  };
  const completedTask = (id) => {
    const updatedTasks = tasks.map((e) => {
      if (e.id === id) {
        e.complete = !e.complete;
      }
      return e;
    });
    setTasks(updatedTasks)
  };

  console.log(tasks);
  return (
    <>
      <Form onSubmit={addTask} />

      <div className="task-list">
        {tasks.map((e) => {
          return (
            <Tarea
              key={e.id}
              text={e.text}
              id={e.id}
              complete={e.complete}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default Lista;

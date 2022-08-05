import React, { useState } from "react";
import "../styles/Form.css";
import { v4 as uuidv4 } from "uuid";

function Form(props) {

const [input, setInput] = useState("");
const handleChange = (e) => {
  setInput(e.currentTarget.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newTask = {
    id: uuidv4(),
    text: input,
    complete: false,
  };

  props.onSubmit(newTask)

  document.getElementsByClassName('task-inp').text.value = ''
};

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-inp"
        placeholder="Write a task..."
        onChange={handleChange}
      />
      <button className="task-btn">Add Task</button>
    </form>
  );
}

export default Form;

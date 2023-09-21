import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initArrays = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initArrays);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container">
      <h1>Daily Goals</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {/* <div className="btn"> */}
        <button type="submit">ADD</button>
        {/* </div> */}
      </form>
      {tasks.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Home;

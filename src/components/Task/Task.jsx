import React from "react";
import { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ ele }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [count,setCount]=useState(ele.count)

  const HandelCount=(value)=>{
      setCount(count+value)
  }
  return (
    <li data-testid="task" className={styles.task} style={{ display: "flex" }}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{ele.text}</div>
      <Counter count={count} HandelCount={HandelCount}/>
      <button data-testid="task-remove-button">delete</button>
    </li>
  );
};

export default Task;

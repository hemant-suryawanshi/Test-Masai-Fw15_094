import React from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ]);

  const DeleteTask = (id) => {
    setData(
      data.filter((ele) => {
        return ele.id !== id;
      })
    );
  };

  const CompleteTask = (id) => {
    // console.log(id);
    setData(data.map((ele) => {
      if (ele.id === id) {
        const short = { ...ele };
        short.done = !short.done;
        return short;
      }
      return ele;
    }));
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={data} />
      <AddTask data={data} setData={setData} />
      <Tasks data={data} DeleteTask={DeleteTask} CompleteTask={CompleteTask}/>
    </div>
  );
};

export default TaskApp;

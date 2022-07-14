import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ data, setData }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newAdd, setNewAdd] = useState({
    id: data.length,
    text: "",
    done: false,
    count: 1,
  });

  function handelSubmitnewAdd() {
    if (newAdd.text == "") {
      return;
    }
    const updatedlist = [...data];
    updatedlist.push(newAdd);
  }

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={newAdd.text}
        onChange={(e) => setNewAdd(newAdd.text + e.target.value)}
      />
      <button data-testid="add-task-button" onClick={handelSubmitnewAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTask;

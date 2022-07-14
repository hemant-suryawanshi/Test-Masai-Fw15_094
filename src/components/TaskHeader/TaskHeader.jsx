import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ data }) => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask = data.filter((ele) => ele.done == true);

  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">
        Uncompleted Task:{unCompletedTask.length}
      </b>
      <b data-testid="header-total-task"> Completed Task:{totalTask}</b>
    </div>
  );
};

export default TaskHeader;

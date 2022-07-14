import React from "react";
import styles from "./tasks.module.css";

const Tasks = ({ data }) => {
  // NOTE: do not delete `data-testid` key value pair
  // console.log(data);

  return (
    <>
      {data.length != 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {data.map((ele) => (
            <li key={ele.id}>{ele.text}</li>
          ))}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          Show when No Tasks are present
        </div>
      )}
    </>
  );
};

export default Tasks;

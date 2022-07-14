import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count, HandelCount }) => {
  // sample value to be replaced

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => HandelCount(1)}
      >
        add one
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => HandelCount(-1)}
      >
        {" "}
        sub one
      </button>
    </div>
  );
};

export default Counter;

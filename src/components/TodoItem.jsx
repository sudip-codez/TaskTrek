/* eslint-disable react/prop-types */
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useContext } from "react";
import { TodoAppContext } from "../store/todo-items-store";
import styles from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoAppContext);

  return (
    <div className="container">
    <div className={styles.oneTask}>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className={`col-4 ${styles.dateColor}`} >{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              deleteItem(todoName, todoDate);
            }}
          >
            <RiDeleteBin7Fill />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TodoItem;

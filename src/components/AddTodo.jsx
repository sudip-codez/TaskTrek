/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { TodoAppContext } from "../store/todo-items-store";
import { useContext } from "react";
import styles from "./AddTodo.module.css";

function AddTodo() {
  const { addNewItem } = useContext(TodoAppContext);

  const toDoInputName = useRef();
  const dueDateInputName = useRef();

  const handleAddButtonPressed = () => {
    const inputName = toDoInputName.current.value;
    const dueDate = dueDateInputName.current.value;
    addNewItem(inputName, dueDate);

    toDoInputName.current.value = "";
    dueDateInputName.current.value = "";
  };
  return (
    <div className="container text-center">
      <div className={`row kg-row `}>
        <div className={`col-6 `}>
          <input
            className={`${styles.todoNameColor}`}
            type="text"
            placeholder="Enter Todo Here"
            ref={toDoInputName}
          />
        </div>
        <div className="col-4">
          <input className={`${styles.todoNameColor}`} type="date" ref={dueDateInputName} />
        </div>
        
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonPressed}
          >
            <MdLibraryAdd />
          </button>
          </div>
        </div>
      </div>
   
  );
}

export default AddTodo;

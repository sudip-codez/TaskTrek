/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoAppContext } from "../store/todo-items-store";
import styles from "./EnjoyMsg.module.css";

const EnjoyMsg = () => {
  const { todoItems } = useContext(TodoAppContext);

  return todoItems.length === 0 ? (
    <h2 className={styles["enjoy-msg"]}>Time to take a break and recharge!</h2>
  ) : null;
};
export default EnjoyMsg;

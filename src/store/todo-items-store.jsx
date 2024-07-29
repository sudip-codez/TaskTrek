/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";

export const TodoAppContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, dispatchedItem) => {
  // This Reducer function takes the current state("currTodoItems") and returns the updated state("newTodoItems")
  let newTodoItems = currTodoItems;
  switch (dispatchedItem.type) {
    case "NEW_ITEM":
      {
        newTodoItems = [
          ...currTodoItems,
          {
            name: dispatchedItem.payload.todoName,
            dueDate: dispatchedItem.payload.todoDate,
          },
        ];
      }
      break;

    case "DELETE_ITEM":
      {
        newTodoItems = currTodoItems.filter(
          (obj) =>
            obj.name !== dispatchedItem.payload.todoName ||
            obj.dueDate !== dispatchedItem.payload.todoDate
        );
      }
      break;
  }

  return newTodoItems;
};

const TodoAppContextProvider = ({children}) => {

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);  //dipatch("dispatchTodoItems") will invoke the reducer function("todoItemsReducer")

  const addNewItem = (todoName, todoDate) => {
    dispatchTodoItems({ type: "NEW_ITEM", payload: { todoName, todoDate } });
  };

  const deleteItem = (todoName, todoDate) => {
    dispatchTodoItems({ type: "DELETE_ITEM", payload: { todoName, todoDate } });
  };

  return (
    <TodoAppContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >{children}</TodoAppContext.Provider>
  );
};
export default TodoAppContextProvider;

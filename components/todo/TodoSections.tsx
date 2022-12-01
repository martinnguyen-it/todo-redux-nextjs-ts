import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import getDataApi from "../redux/api/getDataApi"
import type { RootState } from "../redux/store";
import {interfaceTodo} from "../interface/interfaceTodo"
import todoListSlice from "../redux/todosSlice"

const TodoSections = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todoList.todoListState);

  useEffect(() => {
    getDataApi().then((data : interfaceTodo[]) => {
      dispatch(
        todoListSlice.actions.setInitialState(data)
      );
      });
  }, [])

  var completed = todoList.filter((value : interfaceTodo) => value.isCompleted === true).length;

  return (
    <>
      <div className="p-5">
        <AddTodo />
      </div>

      <div className="mx-2 my-6 h-96 overflow-auto">
        <ul className="ml-4 list-disc text-lg">
            {todoList.length !== 0 && todoList.map((todo) => (
              <ShowTodo 
                key={todo.id}
                id={todo.id}
                name={todo.name} 
                isCompleted={todo.isCompleted}  
              />
            ))}
          </ul>
      </div>

      <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1">{todoList.length} task</p>
        <p className="flex-1 order-2 text-center">{completed} complete</p>
        <p className="flex-1 order-last text-right">{todoList.length - completed} open</p>
      </div>

    </>
  );
}

export  default TodoSections;

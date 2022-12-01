import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { memo } from "react";
import axios from "axios";
import todoListSlice from '../redux/todosSlice';
import interfaceTodo from "../interface/interfaceTodo"

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const nameRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleAddTodo = useCallback(() => {
      if (todo === "") {
        return; 
      }
      axios.post('https://638026512f8f56e28e9c895b.mockapi.io/martin', {
        name: todo,
        isCompleted: false,
      })
      .then(response => response.data)
      .then((data : interfaceTodo) => {
        dispatch(
            todoListSlice.actions.addTodo({
              name: data.name,
              isCompleted: data.isCompleted,
              id: data.id,
            })
          );
        })
        setTodo('');
        nameRef.current?.focus();
      }, [dispatch, todo])

    const handleEnter = useCallback((e : React.KeyboardEvent<HTMLInputElement>) => {
      e.key === 'Enter' && handleAddTodo();
    }, [handleAddTodo])

    const handleChangeTodo = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    }, [])


    return (
        <div className="flex items-center transition duration-500 ease-in-out py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600">
        <input 
          className="flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none" 
          placeholder="Add task..." 
          ref={nameRef}
          value={todo} 
          onKeyDown={handleEnter}
          onChange={handleChangeTodo} />
        <button 
          className='transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2' 
          onClick={handleAddTodo}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>  
      </div>
    )
}

export default memo(AddTodo);
import { memo, useCallback, useState } from "react"
import { useDispatch } from 'react-redux';
import todoListSlice from '../redux/todosSlice';
import interfaceTodo from "../interface/interfaceTodo"

const ShowTodo = ({id, name , isCompleted} : interfaceTodo) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(isCompleted);
    const handleCheck = useCallback(() => {
        setChecked(!checked);
        dispatch(todoListSlice.actions.handleTodoCheck(id));
    }, [checked, id]);

    const handleDelete = useCallback(() => {
        dispatch(todoListSlice.actions.handleTodoDelete(id));
    }, [])

    let textDecorationClass = isCompleted
        ? "line-through"
        : "no-underline";
    let textColorClass = isCompleted
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <li className={`flex justify-between py-2.5 px-2.5 border-b border-gray-300 ${textDecorationClass} ${textColorClass}`} key={id}>
            <input className="cursor-pointer" id={id} checked={isCompleted} onClick={handleCheck} type="checkbox" />
            <label htmlFor={id} className="flex-1 px-2 min-w-0 break-words cursor-pointer">{name}</label>
            <button className='text-gray-400 hover:text-pink-500 focus:outline-none' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button> 
        </li>
    )
}

export default memo(ShowTodo)

import { memo, useCallback, useState } from "react"
import todoListSlice from '../redux/todosSlice';
import {interfaceTodo} from "../interface/interfaceTodo"
import updateDataApi from "../redux/api/updateDataApi";
import deleteDataApi from "../redux/api/deleteDataApi";
import { useAppDispatch } from "../redux/hook";
import { unwrapResult } from "@reduxjs/toolkit";

const ShowTodo = ({id, name , isCompleted} : interfaceTodo) => {
    const dispatch = useAppDispatch();

    const [checked, setChecked] = useState(isCompleted);
    const handleCheck = useCallback(() => {
        setChecked(!checked);
        const todo = {
            id: id,
            isCompleted: checked
        }
        dispatch(updateDataApi(todo));
    }, [checked, id]);

    const handleDelete = useCallback(() => {
        dispatch(deleteDataApi(id));
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

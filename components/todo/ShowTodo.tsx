import { memo, useCallback, useState } from "react"
import {interfaceTodo} from "../interface/interfaceTodo"
import {updateDataApi} from "../redux/todosSlice";
import {deleteDataApi} from "../redux/todosSlice";
import { useAppDispatch } from "../redux/hook";

const ShowTodo = ({id, name , isCompleted} : interfaceTodo) => {
    const [checked, setChecked] = useState(true);
    const [deleted, setDeleted] = useState(true);

    const dispatch = useAppDispatch();

    const handleCheck = useCallback(async () => {
        const todo : interfaceTodo = {
            id: id,
            isCompleted: !isCompleted
        }
        await setChecked(false);
        await dispatch(updateDataApi(todo));
        await setChecked(true)
    }, [id, isCompleted, dispatch]);

    const handleDelete = useCallback(async () => {
        const todo : interfaceTodo = {
            id: id
        }
        await setDeleted(false)
        await dispatch(deleteDataApi(todo));
        await setChecked(true)
    }, [dispatch, id])

    let textDecorationClass = isCompleted
        ? "line-through"
        : "no-underline";
    let textColorClass = isCompleted
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <li className={`flex justify-between py-2.5 px-2.5 border-b border-gray-300 ${textDecorationClass} ${textColorClass}`} key={id}>
            {checked ? <input className="cursor-pointer" id={id} checked={isCompleted} onClick={handleCheck} type="checkbox" /> : <input className="cursor-pointer" disabled type="checkbox" />}
            <label htmlFor={id} className="flex-1 px-2 min-w-0 break-words cursor-pointer">{name}</label>
            {deleted ? <button className='text-gray-400 hover:text-pink-500 focus:outline-none' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button> : <button className='text-blue-500 focus:outline-none'><i className="fa-solid fa-trash-can"></i></button> }
        </li>
    )
}

export default memo(ShowTodo)

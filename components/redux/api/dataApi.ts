import axios from "axios";
import { interfaceTodo } from "../../interface/interfaceTodo";

export const postData = async (todo : interfaceTodo)  => {
    const response = await axios.post('https://638026512f8f56e28e9c895b.mockapi.io/martin', {
        name: todo.name,
        isCompleted: todo.isCompleted,
    })
    return response.data 
}

export const deleteData = async (todo : interfaceTodo) => {
    const response = await axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`)
    return response.data
}

export const getData = async () => {
    const response = await axios.get(`https://638026512f8f56e28e9c895b.mockapi.io/martin`)
    return response.data
}

export const updateData = async (todo : interfaceTodo) => {
    const response = await axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`, {
        isCompleted: todo.isCompleted
    })
    return response.data
}
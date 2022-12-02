import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { interfaceTodo } from "../../interface/interfaceTodo";

const updateDataApi = createAsyncThunk(
  'todo/updateDataApi',
    async (todo : interfaceTodo) => {
        const response = await axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`, {
            isCompleted: todo.isCompleted
        })
        return (await response.data) as interfaceTodo
  }
)

export default updateDataApi
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceTodo } from "../../interface/InterfaceTodo";

const updateDataApi = createAsyncThunk(
  'todo/updateDataApi',
    async (todo : InterfaceTodo) => {
        const response = await axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`, {
            isCompleted: todo.isCompleted
        })
        return (await response.data) as InterfaceTodo
  }
)

export default updateDataApi
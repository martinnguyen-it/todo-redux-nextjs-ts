import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { interfaceTodo } from "../../interface/interfaceTodo";

const addDataApi = createAsyncThunk(
  'todo/addDataApi',
    async (todo : string) => {
        const response = axios.post('https://638026512f8f56e28e9c895b.mockapi.io/martin', {
            name: todo,
            isCompleted: false,
        })
        return (await (await response).data) as interfaceTodo
  }
)

export default addDataApi
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceTodo } from "../../interface/InterfaceTodo";

const addDataApi = createAsyncThunk(
  'todo/addDataApi',
    async (todo : string) => {
        const response = await axios.post('https://638026512f8f56e28e9c895b.mockapi.io/martin', {
            name: todo,
            isCompleted: false,
        })
        return (await response.data) as InterfaceTodo
  }
)

export default addDataApi
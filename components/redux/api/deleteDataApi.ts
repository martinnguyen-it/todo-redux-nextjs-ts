import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { interfaceTodo } from "../../interface/interfaceTodo";

const deleteDataApi = createAsyncThunk(
  'todo/deleteDataApi',
    async (todo : interfaceTodo) => {
        const response = await axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`)
        return (await response.data) as interfaceTodo
  }
)

export default deleteDataApi
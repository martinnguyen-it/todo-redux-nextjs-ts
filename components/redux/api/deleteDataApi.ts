import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceTodo } from "../../interface/InterfaceTodo";

const deleteDataApi = createAsyncThunk(
  'todo/deleteDataApi',
    async (todo : InterfaceTodo) => {
        const response = await axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`)
        return (await response.data) as InterfaceTodo
  }
)

export default deleteDataApi
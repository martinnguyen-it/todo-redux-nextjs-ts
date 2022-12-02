import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceTodo } from "../../interface/InterfaceTodo";


const getDataApi = createAsyncThunk(
  'todo/getDataApi',
  async () => {
    const response = await axios.get(`https://638026512f8f56e28e9c895b.mockapi.io/martin`)
    return (await response.data) as InterfaceTodo[]
  }
)

export default getDataApi

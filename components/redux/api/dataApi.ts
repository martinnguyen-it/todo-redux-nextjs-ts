import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { interfaceTodo } from "../../interface/interfaceTodo";

export const addDataApi = createAsyncThunk(
  'todo/addDataApi',
    async (todo : string)  => {
        const response = await axios.post('https://638026512f8f56e28e9c895b.mockapi.io/martin', {
            name: todo,
            isCompleted: false,
        })
        return response.data 
  }
)

export const deleteDataApi = createAsyncThunk(
    'todo/deleteDataApi',
      async (todo : interfaceTodo) => {
          const response = await axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`)
          return response.data
    }
)

export const getDataApi = createAsyncThunk(
    'todo/getDataApi',
    async () => {
        const response = await axios.get(`https://638026512f8f56e28e9c895b.mockapi.io/martin`)
        return response.data
    }
)

export const updateDataApi = createAsyncThunk(
    'todo/updateDataApi',
        async (todo : interfaceTodo) => {
            const response = await axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${todo.id}`, {
                isCompleted: todo.isCompleted
            })
            return response.data
    }
)

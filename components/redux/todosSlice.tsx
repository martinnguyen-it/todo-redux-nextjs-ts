import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {interfaceTodo} from "../interface/interfaceTodo"
import * as api from "./api/dataApi";

export const addDataApi = createAsyncThunk(
  'todoList/addDataApi',
   async (todo : interfaceTodo) => {
        const res = await api.postData(todo);
        return res;
   }
)

export const deleteDataApi = createAsyncThunk(
    'todoList/deleteDataApi',
    async (todo : interfaceTodo) => {
        const res = await api.deleteData(todo)
        return res;
    }
)

export const getDataApi = createAsyncThunk(
    'todoList/getDataApi',
    async () => {
        const res = await api.getData()
        return res;
    }
)

export const updateDataApi = createAsyncThunk(
    'todoList/updateDataApi',
    async (todo : interfaceTodo) => {
        const res = await api.updateData(todo)
        return res;
    }
)

const todoListState: interfaceTodo[] = [];

export default createSlice({
    name: 'todoList',
    initialState: {
        todoListState: todoListState,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataApi.pending, (state, action) => { })
            .addCase(getDataApi.fulfilled, (state, action) => { 
                state.todoListState = action.payload
            })
        builder
            .addCase(addDataApi.pending, (state, action) => { })
            .addCase(addDataApi.fulfilled, (state, action) => { 
                state.todoListState.push(action.payload)
             })
        builder
            .addCase(updateDataApi.pending, (state, action) => { })
            .addCase(updateDataApi.fulfilled, (state, action) => { 
                const currentTodo = state.todoListState.find(todo => todo.id === action.payload.id);
                if (currentTodo) {
                    currentTodo.isCompleted = !currentTodo.isCompleted;
                }
            })
        builder
            .addCase(deleteDataApi.pending, (state, action) => { })
            .addCase(deleteDataApi.fulfilled, (state, action) => { 
                state.todoListState = state.todoListState.filter((todo) => todo.id !== action.payload.id);
            })
    }
})
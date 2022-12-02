import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {interfaceTodo} from "../interface/interfaceTodo"
import * as api from "./api/dataApi";


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
            .addCase(api.getDataApi.pending, (state, action) => { })
            .addCase(api.getDataApi.fulfilled, (state, action) => { 
                state.todoListState = action.payload
            })
        builder
            .addCase(api.addDataApi.pending, (state, action) => { })
            .addCase(api.addDataApi.fulfilled, (state, action) => { 
                state.todoListState.push(action.payload)
             })
        builder
            .addCase(api.updateDataApi.pending, (state, action) => { })
            .addCase(api.updateDataApi.fulfilled, (state, action) => { 
                const currentTodo = state.todoListState.find(todo => todo.id === action.payload.id);
                if (currentTodo) {
                    currentTodo.isCompleted = !currentTodo.isCompleted;
                }
            })
        builder
            .addCase(api.deleteDataApi.pending, (state, action) => { })
            .addCase(api.deleteDataApi.fulfilled, (state, action) => { 
                state.todoListState = state.todoListState.filter((todo) => todo.id !== action.payload.id);
            })
    }
})
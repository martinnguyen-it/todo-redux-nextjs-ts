import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {interfaceTodo} from "../interface/interfaceTodo"
import deleteDataApi from "./api/deleteDataApi";
import updateDataApi from "./api/updateDataApi";
import addDataApi from "./api/addDataApi";
import getDataApi from "./api/getDataApi";

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
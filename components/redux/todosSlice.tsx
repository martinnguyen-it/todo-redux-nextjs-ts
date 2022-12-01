import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {interfaceTodo} from "../interface/interfaceTodo"
import deleteDataApi from "./api/deleteDataApi";
import updateDataApi from "./api/updateDataApi";

const todoListState: interfaceTodo[] = [];

export default createSlice({
    name: 'todoList',
    initialState: {
        todoListState: todoListState,
    },
    reducers: {
        setInitialState: (state, action) => {
            void(state.todoListState = action.payload)
        },
        addTodo: (state, action : PayloadAction<interfaceTodo>) => {
            state.todoListState.push(action.payload)
        },
        handleTodoCheck: (state, action) => {
            const currentTodo = state.todoListState.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.isCompleted = !currentTodo.isCompleted;
                updateDataApi(action.payload, currentTodo.isCompleted);
            }
        },
        handleTodoDelete: (state, action) => {
            state.todoListState = state.todoListState.filter((todo) => todo.id !== action.payload);
            deleteDataApi(action.payload)
        }
    }
})
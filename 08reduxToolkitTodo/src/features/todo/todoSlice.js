import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World", completed: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
            console.log(state.todos);
        },
        toggleComplete: (state, action) => {
            console.log(action.payload)
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo , completed: !todo.completed } : todo)
            console.log(state.todos)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer
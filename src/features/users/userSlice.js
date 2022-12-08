import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'kriti', email: '123kritikumari@gmail.com' },
    { id: '2', name: 'priti', email: '321kritikumari@gmail.com' }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    },
    editUser: (state, action) => {
        const { id, name, email } = action.payload;
        const existingUser = state.find(user => user.id === id)
        if (existingUser) {
            existingUser.name = name;
            existingUser.email = email;
        }
    },
    deletUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if (existingUser) {
            return state.filter(user => user.id !== id)
        }
    }
})

export const { addUser, editUser, deletUser } = userSlice.actions;
export default userSlice.reducer;
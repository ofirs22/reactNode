import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, // Default to null if no user is found in localStorage
};

// Check if the 'user' key exists in localStorage and parse it safely
const storedUser = window.localStorage.getItem('user');
if (storedUser) {
    try {
        initialState.user = JSON.parse(storedUser);
    } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        initialState.user = null; // Fallback in case of an error
    }
}

console.log(initialState, "initial state");

const localSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            // You can also update localStorage here if needed
            window.localStorage.setItem('user', JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.user = null;
            // You can also update localStorage here if needed
            window.localStorage.removeItem('user');
        },
    },
});

export const { setUser, clearUser } = localSlice.actions;

export default localSlice.reducer;

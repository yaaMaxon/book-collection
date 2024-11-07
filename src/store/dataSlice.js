import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [{
        id: nanoid(),
        title: 'The Lord of the Rings', 
        author: 'Tolkien', 
        genre: 'Fantasy'},
    {
    id: nanoid(),
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy'
},
{
    id: nanoid(),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic'
},
{
    id: nanoid(),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian'
},
{
    id: nanoid(),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance'
},
{
    id: nanoid(),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic'
},
{
    id: nanoid(),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Classic'
},
{
    id: nanoid(),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy'
},
{
    id: nanoid(),
    title: 'Moby-Dick',
    author: 'Herman Melville',
    genre: 'Adventure'
},
{
    id: nanoid(),
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    genre: 'Classic'
}
]

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addBook(state, {payload}) {
            return [...state, payload]
        },
        removeBook(state, {payload}) {
            return state.filter(book => book.id !== payload)
        },
    }
})

export const {addBook, removeBook} = dataSlice.actions;
export default dataSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}


export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
})

export const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        // HTTP isteği olmaz ise kullanılır.
    },
    extraReducers : (builder) => {// http istekleri burada atılır.
        builder.addCase(getAllUsers.fulfilled,(state, action)=>{ //buradaki state değeri initialState'i, action ise return response.data'yı gösterir
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions // burada reducer içine yazdığımız fonksiyonları yazıoyruz
export default userSlice.reducer
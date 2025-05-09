import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const userData = createAsyncThunk('Todos/userData', async (dispatch) => {
    const response = await axios.get('http://localhost:3001/LoginData')
    return response.data;
})

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isPending:false,
        isError:false,
        loginData : {},
    },
    extraReducers : builder => {
        builder
            .addCase(userData.pending, (state, action) => {
            state. isPending = true;
            state.loginData ={};
        })
            .addCase(userData.rejected,(state, action) => {
                state.isError = true;
                state.isPending = false;

            } )

            .addCase(userData.fulfilled, (state, action) => {
                state.loginData =action.payload;
                state.isPending = false;
            })
    }
    }

)

export{userData};
export default loginSlice.reducer;
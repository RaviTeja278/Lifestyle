import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from "axios";


const homeTodos = createAsyncThunk('todos/homeTodos', async () => {
    const response = await axios.get('http://localhost:3001/HomeData')
    return response.data
})




const userNameRegex = /^[a-zA-z]+$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%^&*()!?<>])[a-zA-Z\d@$#%^&*()!?<>]{8,}$/;

export const formSlice = createSlice({
    name: 'form',
    initialState:{
        userName: "",
        userNameErrorMessage: "",
        password: "",
        passwordErrorMessage: "",
        isPending:false,
        isError:false,
        homeData: {},
        showRedeemSection: false,
        redeemAmount: 0,
        reviewMode: false,




    },
    reducers:{
        userNameValidation :(state, action) =>{
            const username = action.payload;
            state.userName = (userNameRegex.test(username) ? username : state.userName)
            state.userNameErrorMessage= (userNameRegex.test(username) ? '' : "UserName should contain only letters")

        },
        userPasswordValidation :(state, action) =>{
            const passwordPayload = action.payload;
            state.password = (passwordRegex.test(passwordPayload) ? passwordPayload : state.password )
            state.passwordErrorMessage =(passwordRegex.test(passwordPayload) ? '' :
             "Password must contain at least 8 characters and one number, one letter and one special character")

        },
        redeemSection: (state) => {
            state.showRedeemSection = !state.showRedeemSection;
        },
        setRedeemAmount: (state, action) => {
            const value = parseFloat(action.payload);
            state.redeemAmount = value > state.homeData.rewards ? state.homeData.rewards : value;
        },
        toggleReviewMode: (state) => {
            state.reviewMode = !state.reviewMode;
        }

    },
    extraReducers: builder => {
        builder

            .addCase(homeTodos.pending, (state, action) => {
                state.isPending = true
                state.isError = false
                state.homeData = {}
            })
            .addCase(homeTodos.rejected, (state, action) => {
                state.isPending = false
                state.isError = true
            })
            .addCase(homeTodos.fulfilled, (state, action) => {


                state.homeData = action.payload;
                state.isPending = false
            })




    }
})


 const {userNameValidation, userPasswordValidation,redeemSection,setRedeemAmount,toggleReviewMode} = formSlice.actions;
export {userNameValidation, userPasswordValidation, homeTodos, redeemSection,setRedeemAmount,toggleReviewMode}
export default formSlice.reducer;
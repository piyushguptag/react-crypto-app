import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {server} from "../../index";
import axios from "axios";

export const fetchExhanges = createAsyncThunk('fetchExchanges', async () => {
    const response = await axios.get(`${server}/exchanges`);
    return response;
})

 const excCall = createSlice({
    name : 'excCall',
    initialState :{
        isLoading : false,
        data : null,
        isError : false,
    } ,
    extraReducers :  (builder) => {
        builder.addCase(fetchExhanges.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchExhanges.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchExhanges.rejected, (state , action)=>{
            console.log('Error', action.payload);
            state.isError = true;
        })
    }
 });
 
 export default excCall.reducer;
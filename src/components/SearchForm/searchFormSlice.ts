import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    tvShow:"",
    loadingShow:false
}


export const searchFormSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        onChangeTvShow:(state, {payload}:PayloadAction<string>, )=>{
            state.tvShow = payload;
        }
    },
    extraReducers:()=>{

    },
    selectors:{
        selectTvShow:(state)=> state.tvShow,
    }
})

export const searchReducer = searchFormSlice.reducer
export const {onChangeTvShow} = searchFormSlice.actions;
export const {selectTvShow} = searchFormSlice.selectors;
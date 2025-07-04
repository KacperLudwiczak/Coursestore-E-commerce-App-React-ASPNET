import { createSlice } from "@reduxjs/toolkit";
import type { ProductParams } from "../../app/models/productParams";

const initialState: ProductParams = {
    pageNumber: 1,
    pageSize: 8,
    types: [],
    authors: [],
    searchTerm: '',
    orderBy: 'name'
}

export const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState,
    reducers: {
        setPageNumber(state, action) {
            state.pageNumber = action.payload
        },
        setPageSize(state, action) {
            state.pageSize = action.payload
        },
        setOrderBy(state, action) {
            state.orderBy = action.payload
            state.pageNumber = 1;
        },
        setTypes(state, action) {
            state.types = action.payload
            state.pageNumber = 1;
        },
        setAuthors(state, action) {
            state.authors = action.payload
            state.pageNumber = 1;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
            state.pageNumber = 1;
        },
        resetParams() {
            return initialState;
        }
    }
});

export const {setAuthors, setOrderBy, setPageNumber, setPageSize, 
    setSearchTerm, setTypes, resetParams} 
    = catalogSlice.actions;
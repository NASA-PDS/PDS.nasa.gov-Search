import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../api/client';

const initialState = {
    searchText : '',
    searchResults: {}
}

export const getSearchResults = createAsyncThunk(
    'posts/getSearchResults',
    async (initialSearch) => {
        const response = await client.get('http://localhost:8085/PDS_APIs/pds_doi_api/0.2/dois')
        return response.data
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.searchResults = (action.payload);
            })
    }
})

export const { setSearchText } = appSlice.actions;
export default appSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Game} from '../shared/types'

interface FavouritesState {
    list: Game[]
}
const initialState: FavouritesState = {
    list: []
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<Game>) {
            state.list.push(action.payload)
        },
        removeFavourite(state, action: PayloadAction<string>) {
            const newState = state.list.filter(item => item.id !== action.payload)
            state.list = newState
        }
    }
})

export const favouritesReducer = favouritesSlice.reducer
export const {addFavourite, removeFavourite} = favouritesSlice.actions

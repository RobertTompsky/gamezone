import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../features/gamesApi";
import { favouritesReducer } from "../features/favouritesSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from "../features/authSlice";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    [gamesApi.reducerPath]: gamesApi.reducer,
    auth: authReducer,
    favourites: favouritesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(gamesApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
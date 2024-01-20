import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiURL } from "../shared/apiURL";
import { EditedGame, Game, GameBody } from "../shared/types";

export const gamesApi = createApi({
    reducerPath: 'games',
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    tagTypes: ['Game'],
    endpoints: (builder) => ({
        getGames: builder.query<Game[], {name: string, genre: string, page: number, perPage: number}>({
            query: (params) => ({
                url: '/games',
                params: {
                    name: params.name,
                    genre: params.genre,
                    _page: params.page,
                    _per_page: params.perPage
                },
            }),
            transformResponse: (response: {data: Game[]}) => response.data,
            providesTags: ['Game']
        }),
        getSelectedGame: builder.query<Game, string>({
            query: (id) => ({
                url: `/games/${id}`
            }),
            providesTags: ['Game']
        }),
        addGame: builder.mutation<Game, GameBody>({
            query: (body) => ({
                url: '/games',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Game']
        }),
        editGame: builder.mutation<Game, EditedGame>({
            query: (body) => ({
                url: `/games/${body.id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ['Game']
        }),
        deleteGame: builder.mutation<void, string>({
            query: (id) => ({
                url: `/games/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Game']
        })
    })
})

export const {
    useGetGamesQuery,
    useGetSelectedGameQuery,
    useAddGameMutation,
    useDeleteGameMutation,
    useEditGameMutation } = gamesApi
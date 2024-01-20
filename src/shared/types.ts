import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationActionCreatorResult, MutationDefinition } from "@reduxjs/toolkit/query/react"

export type Game = {
    id: string, 
    name: string, 
    genre: string, 
    review: string, 
    rating: number, 
    cover: string
}
export type User = {
    userName: string,
    password: string
}

export type AuthedUser = {
    user: Omit<User, 'password'>,
    token: string
}

export type GameBody = Omit<Game, "id">

export type EditedGame = Partial<Game> & Pick<Game, 'id'>

export type AddGameMutation = (arg: GameBody) => MutationActionCreatorResult<
    MutationDefinition<
        GameBody,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
        "Game",
        Game,
        "games"
    >
>

export type editGameMutation = (arg: EditedGame) => MutationActionCreatorResult<
    MutationDefinition<
        EditedGame,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
        "Game",
        Game,
        "games"
    >
>


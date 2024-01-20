import { RouteProps } from "react-router-dom"
import GamesPage from "../pages/GamesPage/GamesPage"
import SingleGamePage from "../pages/SingleGamePage/SingleGamePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AddGamePage from "../pages/AddGamePage/AddGamePage"
import EditGamePage from "../pages/EditGamePage/EditGamePage"
import FavouritesPage from "../pages/FavouritesPage/FavouritesPage"
import LoginPage from "../pages/LoginPage/LoginPage"


export enum AppRoutes {
    GAMES = 'games',
    GAME = 'game',
    ADD_GAME = 'add_game',
    EDIT_GAME = 'edit_game',
    NOT_FOUND = 'not_found',
    FAVOURITES = 'favourites',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.GAMES]: '/',
    [AppRoutes.GAME]: '/game',
    [AppRoutes.EDIT_GAME]: '/edit_game',
    [AppRoutes.ADD_GAME]: '/add_game',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.FAVOURITES]: '/favourites',
    [AppRoutes.LOGIN]: '/login',
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.GAMES]: {
        path: RoutePath[AppRoutes.GAMES],
        element: <GamesPage />
    },
    [AppRoutes.GAME]: {
        path: `${RoutePath[AppRoutes.GAME]}/:id`,
        element: <SingleGamePage />,
    },
    [AppRoutes.EDIT_GAME]: {
        path: `${RoutePath[AppRoutes.GAME]}/:id${RoutePath[AppRoutes.EDIT_GAME]}`,
        element: <EditGamePage />
    },
    [AppRoutes.ADD_GAME]: {
        path: RoutePath[AppRoutes.ADD_GAME],
        element: <AddGamePage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    },
    [AppRoutes.FAVOURITES]: {
        path: RoutePath[AppRoutes.FAVOURITES],
        element: <FavouritesPage />
    },
    [AppRoutes.LOGIN]: { 
        path: RoutePath[AppRoutes.LOGIN], 
        element: <LoginPage /> },
}
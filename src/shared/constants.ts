import { Game } from "./types";
import { GENRES } from "./data";
import { RATING } from "./utils";

export const emptyString: string = ''

export const emptyGameData: Game = { 
    id: '', 
    name: '', 
    genre: GENRES[0], 
    review: '', 
    rating: RATING[0], 
    cover: '' 
}

export const initPage: number = 1
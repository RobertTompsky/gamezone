import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { AddGameMutation, Game, User, editGameMutation } from "./types";
import { v4 as uuidv4 } from 'uuid'
import { NavigateFunction } from "react-router-dom";

export const RATING: number[] = Array.from({length: 10}, (_, index: number) => index + 1)

export const GAMES_PER_PAGE: number[] = Array.from({length: 3}, (_, index: number) => (index + 1) * 3)

export const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    setGameData: Dispatch<SetStateAction<Game>>
) => {
    const { name, value } = e.target;
    const strOrNumValue = Number(value) || value;
    setGameData((prevData) => ({ ...prevData, [name]: strOrNumValue }));
};

export const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    mutationType: string,
    gameData: Game,
    addGame: AddGameMutation,
    editGame: editGameMutation,
    navigate: NavigateFunction,
    navRoute: string
) => {
    e.preventDefault();
    try {
        if (mutationType === 'addGame') {
            const newGame = { ...gameData, id: uuidv4() };
            await addGame(newGame);
        } else if (mutationType === 'editGame') {
            await editGame(gameData);
        }
        navigate(navRoute);
    } catch (error) {
        console.error('Ошибка', error);
    }
};
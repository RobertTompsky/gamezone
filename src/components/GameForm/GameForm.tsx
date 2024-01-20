import { ChangeEvent, FC, useState } from 'react';
import { Game } from '../../shared/types';
import styles from './GameForm.module.scss'
import { useNavigate } from 'react-router-dom';
import { useAddGameMutation, useEditGameMutation } from '../../features/gamesApi';
import { RATING, handleChange, handleSubmit } from '../../shared/utils';
import { GENRES } from '../../shared/data';

interface GameFormProps {
    initialGameData: Game,
    btnTitle: string,
    formTitle: string,
    navRoute: string,
    mutationType: 'addGame' | 'editGame'
}

const GameForm: FC<GameFormProps> = ({ initialGameData, btnTitle, navRoute, mutationType, formTitle }) => {
    const navigate = useNavigate()
    const [gameData, setGameData] = useState<Game>(initialGameData)
    const [addGame] = useAddGameMutation()
    const [editGame] = useEditGameMutation()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        handleChange(e, setGameData);
    };

    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        handleSubmit(e, mutationType, gameData, addGame, editGame, navigate, navRoute)
    }


    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <h2>{formTitle}</h2>
            <label htmlFor='name'>Название</label>
            <input
                type='text'
                placeholder='Укажите название'
                onChange={handleInputChange}
                name='name'
                value={gameData.name}
                className={styles.input} />
            <label htmlFor='ganre'>Жанр</label>
            <select
                onChange={handleInputChange}
                name='genre'
                value={gameData.genre}
                className={styles.input}>
                {GENRES.map((genre) => (
                    <option key={genre}>{genre}</option>
                ))}
            </select>
            <label htmlFor='review'>Обзор</label>
            <textarea
                name='review'
                value={gameData.review}
                onChange={handleInputChange}
                className={styles.input} />
            <label htmlFor='rating'>Оценка</label>
            <select
                onChange={handleInputChange}
                name='rating'
                value={gameData.rating}
                className={styles.input}>
                {RATING.map((r) => (
                    <option key={r}>{r}</option>
                ))}
            </select>
            <label htmlFor='cover'>Обложка</label>
            <input
                type='text'
                placeholder='Укажите url-адрес обложки'
                onChange={handleInputChange}
                name='cover'
                value={gameData.cover}
                className={styles.input} />
            <button
                type="submit"
                className={styles.btn_submit}>
                {btnTitle}
            </button>
        </form>
    );
};

export default GameForm;

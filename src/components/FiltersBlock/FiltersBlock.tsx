import React, { FC } from 'react';
import styles from './FiltersBlock.module.scss'
import { GENRES } from '../../shared/data';
import { GAMES_PER_PAGE } from '../../shared/utils';
import { emptyString, initPage } from '../../shared/constants';

interface FiltersBlockProps {
    gameName: string,
    setGameName: (value: React.SetStateAction<string>) => void,
    setSearchTerm: (value: React.SetStateAction<string>) => void,
    gamesPerPage: number,
    genre: string,
    setGenre: (value: React.SetStateAction<string>) => void,
    setCurPage: (value: React.SetStateAction<number>) => void,
    setGamesPerPage: (value: React.SetStateAction<number>) => void
    
}
const FiltersBlock: FC<FiltersBlockProps> = ({genre, setGenre, setCurPage, gameName, gamesPerPage, setGameName, setSearchTerm, setGamesPerPage}) => {
    const handleGenreChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { value } = e.target
        if (GENRES.includes(value)) {
            setGenre(value)
            setCurPage(initPage)
        }
    }

    const handleResetFilter = (): void => {
        setGenre(emptyString)
        setCurPage(initPage)
    };

    const handlePerPageChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { value } = e.target
        if (GAMES_PER_PAGE.includes(Number(value))) {
            setGamesPerPage(Number(value))
            setCurPage(initPage)
        }
    }
    return (
        <div className={styles.gamesinputs}>

        <div className={styles.gamesinputandbtn}>
            <div className={styles.gamesinput}>
                <label>Поиск игры</label>
                <input
                    placeholder='Начните вводить название игры...'
                    value={gameName}
                    onChange={(e) => setGameName(e.target.value)} />
            </div>
            <button
                onClick={() => setSearchTerm(gameName)}
                className={styles.gameslistbtn}>
                Поиск
            </button>
        </div>

        <div className={styles.gamesinputandbtn}>
            <div className={styles.gamesinput}>
                <label>Фильтр по жанрам</label>
                <select
                    value={genre}
                    name='genre'
                    onChange={handleGenreChange}>
                    <option>Выбрать жанр</option>
                    {GENRES.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <button
                className={styles.gameslistbtn}
                onClick={handleResetFilter}>
                Сброс
            </button>
        </div>

        <div className={styles.gamesinputandbtn}>
            <div className={styles.gamesinput}>
                <label>Количество игр на странице</label>
                <select
                    value={gamesPerPage}
                    name='gamesperpage'
                    onChange={handlePerPageChange}>
                    {GAMES_PER_PAGE.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <button className={styles.gameslistbtn}>Ок</button>
        </div>

    </div>
    );
};

export default FiltersBlock;
import { FC } from 'react';
import styles from './PaginationBlock.module.scss'
import { initPage } from '../../shared/constants';
import { Game } from '../../shared/types';

interface PaginationBlockProps {
    curPage: number,
    setCurPage: (value: React.SetStateAction<number>) => void,
    gamesPerPage: number,
    games: Game[] | undefined
}


const PaginationBlock: FC<PaginationBlockProps> = ({curPage, setCurPage, gamesPerPage, games}) => {
    const handleChangePage = (direction: 'prev' | 'next'): void => {
        if (direction === 'prev' && curPage > initPage) {
            setCurPage((prevPage) => prevPage - 1);
        } else if (direction === 'next' && games && games.length >= gamesPerPage) {
            setCurPage((prevPage) => prevPage + 1);
        }
    }

    return (
        <div className={styles.pagination}>
        <button onClick={() => handleChangePage('prev')}>Назад</button>
        <p>{curPage}</p>
        <button onClick={() => handleChangePage('next')}>Вперед</button>
    </div>
    );
};

export default PaginationBlock;
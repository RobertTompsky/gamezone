import { FC, useState } from 'react';
import { useGetGamesQuery } from '../../features/gamesApi';
import GameCard from '../GameCard/GameCard';
import styles from './GamesList.module.scss'
import { emptyString, initPage } from '../../shared/constants';
import { GAMES_PER_PAGE } from '../../shared/utils';
import PaginationBlock from '../PaginationBlock/PaginationBlock';
import FiltersBlock from '../FiltersBlock/FiltersBlock';

const GamesList: FC = () => {
    const [gameName, setGameName] = useState(emptyString)
    const [searchTerm, setSearchTerm] = useState(emptyString)
    const [genre, setGenre] = useState(emptyString)
    const [curPage, setCurPage] = useState(initPage)
    const [gamesPerPage, setGamesPerPage] = useState(GAMES_PER_PAGE[0])

    const params = {
        name: searchTerm,
        genre: genre,
        page: curPage,
        perPage: gamesPerPage
    }

    const { data: games } = useGetGamesQuery(params)

    return (
        <div className={styles.gamespage}>
            <FiltersBlock
                gameName={gameName}
                setCurPage={setCurPage}
                setGameName={setGameName}
                setGamesPerPage={setGamesPerPage}
                setGenre={setGenre}
                setSearchTerm={setSearchTerm}
                gamesPerPage={gamesPerPage}
                genre={genre} />

            {games && games.length > 0 ?
                (<div className={styles.gameslist}>
                    {games?.map((game) => (
                        <GameCard
                            game={game}
                            key={game.id} />
                    ))}
                </div>)
                :
                (<div>Список игр пуст</div>)}

            {games && games.length > 0 &&
                <PaginationBlock
                    curPage={curPage}
                    setCurPage={setCurPage}
                    games={games}
                    gamesPerPage={gamesPerPage} />}
        </div>
    );
};

export default GamesList;
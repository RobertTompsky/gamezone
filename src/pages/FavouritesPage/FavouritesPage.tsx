import styles from './FavouritesPage.module.scss'
import { useAppSelector } from '../../shared/reduxHooks';
import GameCard from '../../components/GameCard/GameCard';
import { FC } from 'react';

const FavouritesPage: FC = () => {

    const favourites = useAppSelector(state => state.favourites.list)

    return (
        <div className={styles.container}>
            <h2>Избранное</h2>
            {favourites.length > 0 ?
                (
                    <div className={styles.list}>
                        {favourites.map((item) => (
                            <GameCard key={item.id} game={item} />
                        ))}
                    </div>
                ) :
                (
                    <h3>Тут пока пусто...</h3>
                )
            }
        </div>
    );
};

export default FavouritesPage;
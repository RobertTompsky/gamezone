import { Game } from '../../shared/types';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../config/routeConfig';
import { useDeleteGameMutation } from '../../features/gamesApi';
import styles from './GameCard.module.scss'
import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks';
import { addFavourite, removeFavourite } from '../../features/favouritesSlice';
import { useState } from 'react';

const GameCard = ({ game }: { game: Game }) => {
    const favourites = useAppSelector(state => state.favourites.list)

    const [isFav, setIsFav] = useState<boolean>(favourites.includes(game))
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [deleteGame, { isLoading: isDeleting }] = useDeleteGameMutation()

    const addToFav = () => {
        dispatch(addFavourite(game))
        setIsFav(true)
    }

    const removeFromFav = () => {
        dispatch(removeFavourite(game.id))
        setIsFav(false)
    }

    const handleDelete = async (id: string): Promise<void> => {
        try {
            await deleteGame(id).unwrap()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div key={game.id} className={styles.card}>
            <img src={game.cover} className={styles.card_img} />
            <div className={styles.card_info}>
                <div className={styles.card_text}>
                    <h2 className={styles.card_title}>{game.name}</h2>
                    <p className={styles.card_genre}>{game.rating}/10</p>
                    <p className={styles.card_genre}>{game.genre}</p>
                </div>
                <div className={styles.btn_group}>
                    <button
                        onClick={() => { navigate(`${RoutePath[AppRoutes.GAME]}/${game.id}`) }}
                        className={styles.btn_about}>
                        Подробнее
                    </button>

                    {!isFav ?
                        (<button
                            className={styles.btn_about}
                            onClick={() => addToFav()}>
                            В избранное
                        </button>) :
                        (<button
                            className={styles.btn_about}
                            onClick={() => removeFromFav()}>
                            Убрать из топа
                        </button>)
                    }

                    <button
                        onClick={() => handleDelete(game.id)}
                        disabled={isDeleting}
                        className={styles.btn_delete}>
                        Удалить
                    </button>
                </div>
            </div>

        </div>
    );
};

export default GameCard;
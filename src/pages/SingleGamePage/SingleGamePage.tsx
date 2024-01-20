import { useNavigate, useParams } from 'react-router-dom';
import { useGetSelectedGameQuery } from '../../features/gamesApi';
import { AppRoutes, RoutePath } from '../../config/routeConfig';
import styles from './SingleGamePage.module.scss'

const SingleGamePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: game } = useGetSelectedGameQuery(id as string)
    if (!game) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <img src={game.cover} className={styles.img} />
            <div className={styles.info}>
                <div className={styles.info_table}>
                    <div className={styles.info_table_row}>
                        <h3>Название:</h3>
                        <p>{game.name}</p>
                    </div>
                    <div className={styles.info_table_row}>
                        <h3>Жанр:</h3>
                        <p>{game.genre}</p>
                    </div>
                    <div className={styles.info_table_row}>
                        <h3>Обзор:</h3>
                        <p>{game.review}</p>
                    </div>
                    <div className={styles.info_table_row}>
                        <h3>Рейтинг:</h3>
                        <p>{game.rating}/10</p>
                    </div>
                </div>
                <div className={styles.btn_group}>
                    <button
                        className={styles.btn_edit}
                        onClick={() => navigate(`${RoutePath[AppRoutes.GAME]}/${id}${RoutePath[AppRoutes.EDIT_GAME]}`)}>
                        Изменить
                    </button>
                    <button
                        className={styles.btn_edit}
                        onClick={() => navigate(RoutePath[AppRoutes.GAMES])}>
                        Назад
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SingleGamePage;
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import { RoutePath } from '../../config/routeConfig';
import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks';
import { setLoggedIn } from '../../features/authSlice';

const Header = () => {
    const isLoggedIn = useAppSelector(state => state.auth?.isLoggedIn)
    const dispatch = useAppDispatch()

    const handleLogOut = (): void => {
        dispatch(setLoggedIn(false))
    }

    return (
        <header className={styles.header}>
            <h1>GAMEZONE</h1>
            <div className={styles.links}>
                <Link to={RoutePath.games} className={styles.link}>Главная</Link>
                <Link to={RoutePath.favourites} className={styles.link}>Избранное</Link>
                <Link to={RoutePath.add_game} className={styles.link}>Добавить игру</Link>
            </div>
            {isLoggedIn && <button onClick={handleLogOut}>Выйти</button>}
        </header>
    );
};

export default Header;
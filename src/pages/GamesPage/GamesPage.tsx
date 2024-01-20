import GamesList from '../../components/GamesList/GamesList';
import styles from './GamesPage.module.scss'

const GamesPage = () => {
    return (
        <div className={styles.container}>
            <GamesList />
        </div>
    );
};

export default GamesPage;
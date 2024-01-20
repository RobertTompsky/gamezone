import { emptyGameData } from '../../shared/constants';
import styles from './AddGamePage.module.scss'
import { AppRoutes, RoutePath } from '../../config/routeConfig';
import GameForm from '../../components/GameForm/GameForm';

const AddGamePage = () => {
    return (
        <div className={styles.container}>
            <GameForm
                initialGameData={emptyGameData}
                btnTitle='Добавить'
                formTitle='Добавление игры'
                navRoute={RoutePath[AppRoutes.GAMES]}
                mutationType='addGame' />
        </div>
    );
};

export default AddGamePage;
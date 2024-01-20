import { FC } from 'react';
import { useGetSelectedGameQuery } from '../../features/gamesApi';
import { useParams } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../config/routeConfig';
import { emptyGameData } from '../../shared/constants';
import GameForm from '../../components/GameForm/GameForm';
import styles from './EditGamePage.module.scss'

const EditGamePage: FC = () => {
    const { id } = useParams()
    const { data: selectedGame } = useGetSelectedGameQuery(id as string)

    return (
        <div className={styles.container}>
            <GameForm 
            initialGameData={selectedGame || emptyGameData}
            formTitle='Редактирование игры'
            mutationType='editGame'
            navRoute={`${RoutePath[AppRoutes.GAME]}/${id}`}
            btnTitle='Сохранить'/>
        </div>
    );
};

export default EditGamePage;
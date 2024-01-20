import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes, RouteConfig, RoutePath } from '../config/routeConfig';
import { FC } from 'react';
import { useAppSelector } from '../shared/reduxHooks';

const AppRouter: FC = () => {
    const isLoggedIn = useAppSelector(state => state.auth?.isLoggedIn)
    
    return (
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        isLoggedIn || path === RoutePath[AppRoutes.LOGIN] ?
                            element 
                            :
                            <Navigate to={RoutePath[AppRoutes.LOGIN]} />} />
            ))}
        </Routes>
    );
};

export default AppRouter;
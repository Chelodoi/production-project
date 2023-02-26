import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

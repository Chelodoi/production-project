import { lazy } from 'react';
// Component must be export default!!!!
export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);

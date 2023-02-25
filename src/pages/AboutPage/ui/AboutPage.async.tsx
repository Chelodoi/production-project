import { lazy } from 'react';
//Component must be export default!!!!
export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);

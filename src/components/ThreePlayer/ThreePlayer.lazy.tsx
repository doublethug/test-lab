import React, { lazy, Suspense } from 'react';

const LazyThreePlayer = lazy(() => import('./ThreePlayer'));

const ThreePlayer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThreePlayer {...props} />
  </Suspense>
);

export default ThreePlayer;

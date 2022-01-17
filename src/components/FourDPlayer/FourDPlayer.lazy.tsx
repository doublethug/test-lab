import React, { lazy, Suspense } from 'react';

const LazyFourDPlayer = lazy(() => import('./FourDPlayer'));

const FourDPlayer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFourDPlayer {...props} />
  </Suspense>
);

export default FourDPlayer;

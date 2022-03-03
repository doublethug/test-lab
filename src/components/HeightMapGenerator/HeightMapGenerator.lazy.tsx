import React, { lazy, Suspense } from 'react';

const LazyHeightMapGenerator = lazy(() => import('./HeightMapGenerator'));

const HeightMapGenerator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeightMapGenerator {...props} />
  </Suspense>
);

export default HeightMapGenerator;

import React, { lazy, Suspense } from 'react';

const LazyMathLab = lazy(() => import('./MathLab'));

const MathLab = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMathLab {...props} />
  </Suspense>
);

export default MathLab;

import React, { lazy, Suspense } from 'react';

const LazyDashBoard = lazy(() => import('./DashBoard'));

const DashBoard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDashBoard {...props} />
  </Suspense>
);

export default DashBoard;

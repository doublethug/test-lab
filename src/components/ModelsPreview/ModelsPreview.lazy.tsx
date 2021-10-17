import React, { lazy, Suspense } from 'react';

const LazyModelsPreview = lazy(() => import('./ModelsPreview'));

const ModelsPreview = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModelsPreview {...props} />
  </Suspense>
);

export default ModelsPreview;

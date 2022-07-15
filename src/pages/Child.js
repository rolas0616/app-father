import React from 'react';

const Home = React.lazy(() => import('Host/Home'));

const Child = () => {
  return (
    <React.Suspense>
      <Home />
    </React.Suspense>
  );
};

export default Child;

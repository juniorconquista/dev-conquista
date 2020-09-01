import React, { Suspense } from 'react';

// const HomeContainer = lazy(() => import('../../containers/Home'));

const HomePage: React.FC = () => (
    <div className="home-page">
        <Suspense fallback={<div>Loading</div>}>
            {/* <HomeContainer /> */}
        </Suspense>
    </div>
);

export default HomePage;

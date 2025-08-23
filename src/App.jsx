import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Features = lazy(() => import('./components/nestedRoutes/Features/Features'));
const Reviews = lazy(() => import('./components/nestedRoutes/Reviews/Reviews'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CampersPage />} />
          <Route path="catalog/:id" element={<CamperPage />} >
          <Route index element={<Features />} />   {/* <-- дефолтна вкладка */}
          <Route path="features" element={<Features />} />
             <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

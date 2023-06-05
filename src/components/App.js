import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(()=> import('../pages/Home'))
const Tweets = lazy(()=> import('../pages/Tweets'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='tweets' element={<Tweets/>} />
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};
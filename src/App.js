import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Child from './pages/Child';
import User from './pages/User';

import './styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="child" element={<Child />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

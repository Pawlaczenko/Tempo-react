import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/songs/top' element={<AboutPage />} />
        <Route path='/songs/search' element={<SearchPage />} />          
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
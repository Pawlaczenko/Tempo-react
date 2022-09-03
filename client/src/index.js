import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TestPage from './pages/TestPage';
import SummaryPage from './pages/SummaryPage';
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IconContext.Provider value={{ className: 'react-icons' }}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/songs/search' element={<SearchPage />} />          
          <Route path='/test/:track_id' element={<TestPage />} />          
          <Route path='/summary' element={<SummaryPage />} />
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </IconContext.Provider>
);
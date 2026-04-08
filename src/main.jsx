import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import FrozenBites from './FrozenBites.jsx';
import MamaMashasCake from './MamaMashasCake.jsx';
import SmoothieBowl from './SmoothieBowl.jsx';
import FAQ from './FAQ.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes/frozen-bites" element={<FrozenBites />} />
        <Route path="/recipes/mama-mashas-cake" element={<MamaMashasCake />} />
        <Route path="/recipes/smoothie-bowl" element={<SmoothieBowl />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

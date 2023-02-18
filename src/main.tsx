import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './routes/home';
import Service from './routes/service';
import Error404 from './routes/Error404';

// ReactDOM.render(
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/service' element={<Service/>} />
        </Route>
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
)

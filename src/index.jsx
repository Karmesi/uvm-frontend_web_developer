import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Mixology from './routes/Mixology';
import Rooms from './routes/Rooms';
import Weather from './routes/Weather';
import { UserProvider } from './userDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="mixology" element={<Mixology />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="weather" element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>,
);

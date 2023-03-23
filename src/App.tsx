import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CharacterDetails } from './pages/CharacterDetails';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/character-details',
    element: <CharacterDetails />
  }
]);

function App () {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

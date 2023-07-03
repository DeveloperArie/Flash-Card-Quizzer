import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Deck from './components/Deck.jsx';
import { Header } from './components/Header.jsx';
import Register from './pages/Register.jsx';
import Welcome from './pages/Welcome.jsx';
import Login from './pages/Login';
import Decks from './components/Decks.jsx'

export const CredentialsContext = React.createContext()

function App() {

const [credentials, setCredentials] = useState(null)

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register setCredentials={setCredentials}/>
  },
  {
    path: "/login",
    element: <Login setCredentials={setCredentials}/>
  },
  {
    path: "/",
    element: <Welcome credentials={credentials}/>,
  },
  {
    path: "/decks",
    element: <Decks credentials={credentials}/>,
  },
  {
    path: "/decks/:deckId",
    element: <Deck/>,
  },
  
]);

  return (
    <div className='App'>
      <CredentialsContext.Provider value={{credentials, setCredentials}}>
        <Header credentials={credentials}/>
        <RouterProvider router={router}/>
      </CredentialsContext.Provider>
    </div>
  )
}

export default App

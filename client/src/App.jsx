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
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';

export const CredentialsContext = React.createContext({
  
})

function App() {
    const tokenFromLocalstorage = localStorage.getItem("token") || "";
    // credentials means the token
    // TODO refactor it to the user object soon.
    const [token, setToken] = useState(tokenFromLocalstorage)
    const [username, setUsername] = useState("")

    const router = createBrowserRouter([
      {
        path: "/signup",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/decks",
        element: <Decks />,
      },
      {
        path: "/decks/:deckId",
        element: <Deck/>,
      },
      
    ],);

      return (
        <div className='App'>
          <CredentialsContext.Provider value={{token, setToken, username, setUsername}}>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/decks' element={<Decks />} />
                    <Route path='/decks/:deckId' element={<Deck />} />

              </Routes>
          </BrowserRouter>
          </CredentialsContext.Provider>
        </div>
      )
}


export default App

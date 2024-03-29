import './App.css'
import ReactLogo from './img/logo.png'
import React from 'react'
import ReactSearch from './img/search.svg'
import ReactPlaylistSvg from './img/sprite.svg'
import Note from './img/note.svg'
import Playlist1 from './img/playlist01.png'
import Playlist2 from './img/playlist02.png'
import Playlist3 from './img/playlist03.png'
import Prev from './img/prev.svg'
import Play from './img/play.svg'
import Next from './img/next.svg'
import Repeat from './img/repeat.svg'
import Shuffle from './img/shuffle.svg'
import Like from './img/like.svg'
import Dislike from './img/dislike.svg'
import Volume from './img/volume.svg'
import PropTypes from 'prop-types'
import * as M from './styles.jsx'
import * as N from './navmenu.js'
import * as C from './centerblock.js'
import * as S from './sidebar.js'
import * as B from './bar.js'
import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import * as Skeleton from './Skeleton.js'
import MainNav from './MainNav.jsx'
import Centerblock from './Centerblock.jsx'
import SideBar from './Sidebar.jsx'
import Bar from './Bar.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { LogIn, LogInDiv } from './pages/login.jsx'
import { Register } from './pages/register.jsx'
import { Main } from './main.jsx'
import Protected from './pages/protected.js'
import { DaysPlaylist } from './pages/daysplaylist'
import { DanceHits } from './pages/100dancehits'
import { IndiPlaylist } from './pages/indi.jsx'
import { MyPlaylist } from './pages/myplaylist.jsx'
import { useContext } from 'react'
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  const { theme } = useThemeContext()

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      document.querySelector('.search__text').style.setProperty('--c', 'black')
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
    document.querySelector('.search__text').style.setProperty('--c', 'white')
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              checkLogIn={() => {
                console.log(isLoggedIn)
                setisLoggedIn(true)
                console.log(isLoggedIn)
              }}
            />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Register
              checkLogIn={() => {
                console.log(isLoggedIn)
                setisLoggedIn(true)
                console.log(isLoggedIn)
              }}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ThemeContext.Provider
                value={{ theme: currentTheme, toggleTheme }}
              >
                <Main />
              </ThemeContext.Provider>
            </Protected>
          }
        ></Route>
        <Route path="/daysplaylist" element={<DaysPlaylist />} />
        <Route path="/100dancehits" element={<DanceHits />} />
        <Route path="/indiplaylist" element={<IndiPlaylist />} />
        <Route path="/myplaylist" element={<MyPlaylist />} />
      </Routes>
    </BrowserRouter>
  )
}

export const themes = {
  light: {
    color: '#282c34',
    background: '#fff',
  },
  dark: {
    color: '#fff',
    background: '#1C1C1C',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  if (!theme) return theme.dark

  return theme
}

export default App

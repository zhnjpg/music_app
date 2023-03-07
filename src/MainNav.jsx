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
import { Link } from 'react-router-dom'
import * as Skeleton from './Skeleton.js'

export function MainNav() {
  const [visible, setVisible] = useState(true)
  function toggleVisibility() {
    setVisible(!visible)
  }
  return (
    <N.MainNav>
      <N.NavLogo>
        <N.LogoImage src={ReactLogo} alt="logo" />
        <N.NavBurger onClick={toggleVisibility}>
          <N.BurgerLine />
          <N.BurgerLine />
          <N.BurgerLine />
        </N.NavBurger>
        {visible ? null : (
          <N.NavMenu>
            <N.MenuList>
              <Link to="/main">
                <li
                  className="MenuListItem"
                  style={{ color: 'white', cursor: 'pointer' }}
                >
                  Главное
                </li>
              </Link>
              <Link to="/myplaylist">
                <li
                  className="MenuListItem"
                  style={{
                    color: 'white',
                    marginTop: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Мой плейлист
                </li>
              </Link>
              <li
                className="MenuListItem"
                style={{ color: 'white', marginTop: '10px', cursor: 'pointer' }}
              >
                Войти
              </li>
            </N.MenuList>
          </N.NavMenu>
        )}
      </N.NavLogo>
    </N.MainNav>
  )
}

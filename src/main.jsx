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
import { MainNav } from './MainNav.jsx'
import { Centerblock } from './Centerblock.jsx'
import { SideBar } from './Sidebar.jsx'
import { Bar } from './Bar.jsx'

export function Main() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <M.Wrapper>
      <M.Container>
        <M.Main>
          <MainNav />
          {loading && <Skeleton.Centerblock />}
          {!loading && <Centerblock />}
          {loading && <Skeleton.SideBar />}
          {!loading && <SideBar />}
          {loading && <Skeleton.Bar />}
          {!loading && <Bar />}
        </M.Main>
      </M.Container>
    </M.Wrapper>
  )
}

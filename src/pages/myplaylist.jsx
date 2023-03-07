import '../App.css'
import ReactLogo from '../img/logo.png'
import React from 'react'
import ReactSearch from '../img/search.svg'
import ReactPlaylistSvg from '../img/sprite.svg'
import Note from '../img/note.svg'
import Playlist1 from '../img/playlist01.png'
import Playlist2 from '../img/playlist02.png'
import Playlist3 from '../img/playlist03.png'
import Prev from '../img/prev.svg'
import Play from '../img/play.svg'
import Next from '../img/next.svg'
import Repeat from '../img/repeat.svg'
import Shuffle from '../img/shuffle.svg'
import Like from '../img/like.svg'
import Dislike from '../img/dislike.svg'
import Volume from '../img/volume.svg'
import PropTypes from 'prop-types'
import * as M from '../styles.jsx'
import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { MainNav } from '../MainNav.jsx'
import { CenterblockPlaylist } from '../centerblockplaylist.jsx'
import { SideBarPlaylist } from '../sidebarplaylist.jsx'
import { Bar } from '../Bar.jsx'

export function MyPlaylist(props) {
  return (
    <M.Wrapper>
      <M.Container>
        <M.Main>
          <MainNav />
          <CenterblockPlaylist name="Мой плейлист" />
          <SideBarPlaylist />
          <Bar />
        </M.Main>
      </M.Container>
    </M.Wrapper>
  )
}

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

export function CenterblockPlaylist(props) {
  return (
    <C.MainCenterblock>
      <C.CenterblockSearch>
        <C.SearchSvg src={ReactSearch} alt="search" />
        <C.SearchText
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </C.CenterblockSearch>
      <div className="centerblock__h2">
        <C.CenterblockH2>{props.name}</C.CenterblockH2>
      </div>
      <C.CenterblockContent>
        <C.ContentTitle>
          <C.Track>ТРЕК</C.Track>
          <C.Artist>ИСПОЛНИТЕЛЬ</C.Artist>
          <C.Album>АЛЬБОМ</C.Album>
          <C.PlaylistSvg src={ReactPlaylistSvg} alt="playlist__svg" />
        </C.ContentTitle>
        <C.ContentPlaylist>
          <C.PlaylistItem>
            <C.PlaylistTrack>
              <C.TrackTitle>
                <C.TrackTitleImage>
                  <C.TrackTitleSvg src={Note} alt="note" />
                </C.TrackTitleImage>
                <div className="track__title-text">
                  <C.TrackTitleLink href="http://">
                    {props.songname} <C.TrackTitleSpan />
                  </C.TrackTitleLink>
                </div>
              </C.TrackTitle>
              <C.TrackAuthor>
                <C.TrackAuthorLink href="http://">
                  {props.artist}
                </C.TrackAuthorLink>
              </C.TrackAuthor>
              <C.TrackAlbum>
                <C.TrackAlbumLink href="http://">
                  {props.album}
                </C.TrackAlbumLink>
              </C.TrackAlbum>
              <div className="track__time">
                <C.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </C.TrackTimeSvg>
                <C.TrackTimeText>{props.time}</C.TrackTimeText>
              </div>
            </C.PlaylistTrack>
          </C.PlaylistItem>
        </C.ContentPlaylist>
      </C.CenterblockContent>
    </C.MainCenterblock>
  )
}

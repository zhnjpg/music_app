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

export function Centerblock(props) {
  const [activeGenre, setActiveGenre] = useState(false)
  const [activeYear, setActiveYear] = useState(false)
  const [activeArtist, setActiveArtist] = useState(false)
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
        <C.CenterblockH2>Треки</C.CenterblockH2>
      </div>
      <C.CenterblockFilter>
        <C.FilterTitle>Искать по:</C.FilterTitle>
        <FilterButton
          name="исполнителю"
          type="artist"
          isActive={activeArtist === true}
          onShow={() => {
            setActiveArtist(!activeArtist)
            setActiveGenre(false)
            setActiveYear(false)
          }}
        />
        <FilterButton
          name="году выпуска"
          type="year"
          isActive={activeYear === true}
          onShow={() => {
            setActiveYear(!activeYear)
            setActiveGenre(false)
            setActiveArtist(false)
          }}
        />
        <FilterButton
          name="жанру"
          type="genre"
          isActive={activeGenre === true}
          onShow={() => {
            setActiveGenre(!activeGenre)
            setActiveArtist(false)
            setActiveYear(false)
          }}
        />
      </C.CenterblockFilter>
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

function FilterButton(props) {
  let options
  let isYear = false
  if (props.type === 'artist') {
    options = [
      'Author',
      'Author',
      'Author',
      'Author',
      'Author',
      'Author',
      'Author',
    ]
  } else if (props.type === 'genre') {
    options = ['genre', 'genre', 'genre', 'genre', 'genre', 'genre', 'genre']
  } else {
    isYear = true
  }
  const [selectedOption, setSelectedOption] = useState(null)
  const onOptionClicked = (value) => () => {
    setSelectedOption(value)

    console.log(selectedOption)
  }

  return (
    <C.DropDownContainer>
      <C.FilterButton onClick={props.onShow}>{props.name}</C.FilterButton>
      {props.isActive && !isYear && (
        <C.DropDownListContainer>
          <C.DropDownList>
            {options.map((option) => (
              <C.ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </C.ListItem>
            ))}
          </C.DropDownList>
        </C.DropDownListContainer>
      )}
      {console.log(props.isActive)}
      {isYear && props.isActive && (
        <C.DropDownListContainer>
          <C.DivYear>
            <label>
              <input type="radio" name="year" />
              Сначала старые
            </label>
            <label>
              <input type="radio" name="year" />
              Сначала новые
            </label>
          </C.DivYear>
        </C.DropDownListContainer>
      )}
    </C.DropDownContainer>
  )
}

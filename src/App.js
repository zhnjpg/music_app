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

function MainNav() {
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
              <li
                className="MenuListItem"
                style={{ color: 'white', cursor: 'pointer' }}
              >
                Главное
              </li>
              <li
                className="MenuListItem"
                style={{ color: 'white', marginTop: '10px', cursor: 'pointer' }}
              >
                Мой плейлист
              </li>
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

function Centerblock(props) {
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

function SideBar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src={Playlist1} alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src={Playlist2} alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg
                className="sidebar__img"
                src={Playlist3}
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

function Bar(props) {
  return (
    <B.Bar>
      <B.BarContent>
        <B.BarPlayerProgress />
        <B.BarPlayerBlock>
          <B.BarPlayer>
            <B.PlayerControls>
              <B.ButtonPrev>
                <B.ButtonPrevSvg src={Prev} alt="prev"></B.ButtonPrevSvg>
              </B.ButtonPrev>
              <B.ButtonPlay>
                <B.ButtonPlaySvg src={Play} alt="play"></B.ButtonPlaySvg>
              </B.ButtonPlay>
              <B.ButtonNext>
                <B.ButtonNextSvg src={Next} alt="next"></B.ButtonNextSvg>
              </B.ButtonNext>
              <B.ButtonRepeat>
                <B.ButtonRepeatSvg
                  src={Repeat}
                  alt="repeat"
                ></B.ButtonRepeatSvg>
              </B.ButtonRepeat>
              <B.ButtonShuffle>
                <B.ButtonShuffleSvg
                  src={Shuffle}
                  alt="shuffle"
                ></B.ButtonShuffleSvg>
              </B.ButtonShuffle>
            </B.PlayerControls>

            <B.PlayerTrackPlay>
              <B.TrackPlayContain>
                <B.TrackPlayImage>
                  <B.TrackPlaySvg src={Note} alt="note" />
                </B.TrackPlayImage>
                <B.TrackPlayAuthor>
                  <B.TrackPlayAuthorLink href="http://">
                    {props.name}
                  </B.TrackPlayAuthorLink>
                </B.TrackPlayAuthor>
                <B.TrackPlayAlbum>
                  <B.TrackPlayAlbumLink href="http://">
                    {props.artist}
                  </B.TrackPlayAlbumLink>
                </B.TrackPlayAlbum>
              </B.TrackPlayContain>

              <B.TrackPlayLikeDis>
                <B.TrackPlayLike>
                  <B.TrackPlayLikeSvg src={Like} alt="like" />
                </B.TrackPlayLike>
                <B.TrackPlayDislike>
                  <B.TrackPlayDislikeSvg src={Dislike} alt="dislike" />
                </B.TrackPlayDislike>
              </B.TrackPlayLikeDis>
            </B.PlayerTrackPlay>
          </B.BarPlayer>
          <B.BarVolumeBlock>
            <B.VolumeContent>
              <B.VolumeImage>
                <B.VolumeSvg src={Volume} alt="volume" />
              </B.VolumeImage>
              <B.VolumeProgress>
                <B.VolumeProgressLine type="range" name="range" />
              </B.VolumeProgress>
            </B.VolumeContent>
          </B.BarVolumeBlock>
        </B.BarPlayerBlock>
      </B.BarContent>
    </B.Bar>
  )
}

function App() {
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
          <div>
            <footer className="footer"></footer>
          </div>
        </M.Main>
      </M.Container>
    </M.Wrapper>
  )
}

export default App

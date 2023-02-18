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
import * as S from './styles.jsx'

function MainNav() {
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={ReactLogo} alt="logo" />
        <S.NavBurger>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>
        <S.NavMenu>
          <S.MenuList>
            <MenuItem name="Главное" />
            <MenuItem name="Мой плейлист" />
            <MenuItem name="Войти" />
          </S.MenuList>
        </S.NavMenu>
      </S.NavLogo>
    </S.MainNav>
  )
}
function MenuItem(props) {
  return (
    <S.MenuItem>
      <S.MenuLink>{props.name}</S.MenuLink>
    </S.MenuItem>
  )
}

function Centerblock(props) {
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg src={ReactSearch} alt="search" />
        <S.SearchText
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <div className="centerblock__h2">
        <S.CenterblockH2>Треки</S.CenterblockH2>
      </div>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterButton name="исполнителю" />
        <FilterButton name="году выпуска" />
        <FilterButton name="жанру" />
      </S.CenterblockFilter>
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Track>ТРЕК</S.Track>
          <S.Artist>ИСПОЛНИТЕЛЬ</S.Artist>
          <S.Album>АЛЬБОМ</S.Album>
          <S.PlaylistSvg src={ReactPlaylistSvg} alt="playlist__svg" />
        </S.ContentTitle>
        <S.ContentPlaylist>
          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  <S.TrackTitleSvg src={Note} alt="note" />
                </S.TrackTitleImage>
                <div className="track__title-text">
                  <S.TrackTitleLink href="http://">
                    {props.songname} <S.TrackTitleSpan />
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  {props.artist}
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">
                  {props.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>{props.time}</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
function FilterButton(props) {
  return (
    <div>
      <S.FilterButton>{props.name}</S.FilterButton>
    </div>
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
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.ButtonPrev>
                <S.ButtonPrevSvg src={Prev} alt="prev"></S.ButtonPrevSvg>
              </S.ButtonPrev>
              <S.ButtonPlay>
                <S.ButtonPlaySvg src={Play} alt="play"></S.ButtonPlaySvg>
              </S.ButtonPlay>
              <S.ButtonNext>
                <S.ButtonNextSvg src={Next} alt="next"></S.ButtonNextSvg>
              </S.ButtonNext>
              <S.ButtonRepeat>
                <S.ButtonRepeatSvg
                  src={Repeat}
                  alt="repeat"
                ></S.ButtonRepeatSvg>
              </S.ButtonRepeat>
              <S.ButtonShuffle>
                <S.ButtonShuffleSvg
                  src={Shuffle}
                  alt="shuffle"
                ></S.ButtonShuffleSvg>
              </S.ButtonShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg src={Note} alt="note" />
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {props.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {props.artist}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg src={Like} alt="like" />
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg src={Dislike} alt="dislike" />
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg src={Volume} alt="volume" />
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
            <Centerblock />
            <SideBar />
            <Bar />
          <div>
            <footer className="footer"></footer>
          </div>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}

export default App

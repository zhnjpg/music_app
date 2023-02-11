import logo from './logo.svg'
import './App.css'
import React from 'react'
import ReactLogo from './img/logo.png'
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

function MainNav() {
  return (
    <div className="main__nav nav">
      <img className="logo__image" src={ReactLogo} alt="logo" />
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <MenuItem name="Главное" />
        <MenuItem name="Мой плейлист" />
        <MenuItem name="Войти" />
      </div>
    </div>
  )
}
function MenuItem(props) {
  return (
    <li className="menu__item">
      <a href="http://" className="menu__link">
        {props.name}
      </a>
    </li>
  )
}

function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search centerblock">
        <img className="search__svg" src={ReactSearch} alt="search" />
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <div className="centerblock__h2">
        <h2>Треки</h2>
      </div>
      <div className="centerblock__filter filter">
        <h4>Искать по:</h4>
        <FilterButton name="исполнителю" />
        <FilterButton name="году выпуска" />
        <FilterButton name="жанру" />
      </div>
    </div>
  )
}
function FilterButton(props) {
  return (
    <div className="filter__button button-year _btn-text">
      <button>{props.name}</button>
    </div>
  )
}

function PlaylistTitle() {
  return (
    <div className="content__title playlist__title">
      <h4>ТРЕК</h4>
      <h4>ИСПОЛНИТЕЛЬ</h4>
      <h4>АЛЬБОМ</h4>
      <img
        className="playlist-title__svg"
        src={ReactPlaylistSvg}
        alt="playlist__svg"
      />
    </div>
  )
}

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <img className="track__title-svg" src={Note} alt="note"></img>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.songname} <span className="track__title-span"></span>
              </a>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  {props.artist}
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  {props.album}
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">{props.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist1}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist2}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist3}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bar(props) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <img
                  className="player__btn-prev-svg"
                  src={Prev}
                  alt="prev"
                ></img>
              </div>
              <div className="player__btn-play _btn">
                <img
                  className="player__btn-play-svg"
                  src={Play}
                  alt="play"
                ></img>
              </div>
              <div className="player__btn-next">
                <img
                  className="player__btn-next-svg"
                  src={Next}
                  alt="next"
                ></img>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <img
                  className="player__btn-repeat-svg"
                  src={Repeat}
                  alt="repeat"
                ></img>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <img
                  className="player__btn-shuffle-svg"
                  src={Shuffle}
                  alt="shuffle"
                ></img>
              </div>
            </div>

            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <div className="track-play__image">
                  <img className="track-play__svg" src={Note} alt="note"></img>
                </div>
                <div className="track-play__author">
                  <a className="track-play__author-link" href="http://">
                    {props.name}
                  </a>
                </div>
                <div className="track-play__album">
                  <a className="track-play__album-link" href="http://">
                    {props.artist}
                  </a>
                </div>
              </div>

              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <img
                    className="track-play__like-svg"
                    src={Like}
                    alt="like"
                  ></img>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <img
                    className="rack-play__dislike-svg"
                    src={Dislike}
                    alt="dislike"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <img className="volume__svg" src={Volume} alt="volume"></img>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="main">
      <div className="nav">
        <MainNav />
      </div>
      <div className="centerblock">
        <Centerblock />
        <PlaylistTitle />
        <PlaylistItem />
        <SideBar />
      </div>
      <div className="bar">
        <Bar />
      </div>
      <div>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App

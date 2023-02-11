import React from 'react'
import ReactLogo from './logo.png';
import ReactSearch from './.search.svg';
import ReactPlaylistSvg from './.sprite.svg';

function MainNav() {
  return (
    <div className="MainNav">
      <img className="logo__image" src={ReactLogo} alt="logo" />
      <menuItem name="Главное" />
      <menuItem name="Мой плейлист" />
      <menuItem name="Войти" />
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

function CenterblockSearch() {
    return (
        <div className="Search">
            <img className="search__image" src={ReactSearch} alt="search" />
            <input className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
    )
}

function CenterblockH2() {
    return (
        <div className="centerblock__h2">
        <h2>Треки</h2>
        </div>
    )
}

function CenterblockFilter() {
    return (
        <div className="centerblock__filter">
        <h4>Искать по:</h4>
<FilterButton name="исполнителю" />
<FilterButton name="году выпуска" />
<FilterButton name="жанру" />
        </div>
    )
}

function FilterButton(props) {
    return (
      <div className="filter__button">
        <button>{props.name}</button>
      </div>
    )
  }

function PlaylistTitle() {
return (
    <div className="playlist__title">
    <h4>ТРЕК</h4>
    <h4>ИСПОЛНИТЕЛЬ</h4>
    <h4>АЛЬБОМ</h4>
    <img className="playlist-title__svg" src={ReactPlaylistSvg} alt="playlist__svg" />
    </div>
)
}
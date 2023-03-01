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
import * as C from './centerblock.js'
import * as S from './sidebar.js'
import * as B from './bar.js'
import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export function Centerblock(props) {
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
        <FilterButton name="исполнителю" type="artist" />
        <FilterButton name="году выпуска" type="year" />
        <FilterButton name="жанру" type="genre" />
      </C.CenterblockFilter>
      <C.CenterblockContent>
        <C.ContentTitle>
          <C.Track>ТРЕК</C.Track>
          <C.Artist>ИСПОЛНИТЕЛЬ</C.Artist>
          <C.Album>АЛЬБОМ</C.Album>
          <C.PlaylistSvg src={ReactPlaylistSvg} alt="playlist__svg" />
        </C.ContentTitle>
        <C.ContentPlaylist>
          <SkeletonPlaylistItem />
        </C.ContentPlaylist>
      </C.CenterblockContent>
    </C.MainCenterblock>
  )
}

export function SideBar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <SkeletonSidebarItem />
          <SkeletonSidebarItem />
          <SkeletonSidebarItem />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export function Bar(props) {
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
                <SkeletonTrackPlayImage />
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

function SkeletonTrackPlayImage() {
  return (
    <B.TrackPlayImage>
      <svg
        width="122"
        height="52"
        viewBox="0 0 122 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.490723" width="51" height="51" fill="#313131" />
        <rect x="63" y="29.4907" width="59" height="15" fill="#313131" />
        <rect x="63" y="7.49072" width="59" height="15" fill="#313131" />
      </svg>
    </B.TrackPlayImage>
  )
}

function SkeletonPlaylistItem() {
  return (
    <C.PlaylistItem>
      <svg
        width="752"
        height="52"
        viewBox="0 0 752 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.490723" width="51" height="51" fill="#313131" />
        <rect x="65" y="16.4907" width="356" height="19" fill="#313131" />
        <rect x="481" y="16.4907" width="271" height="19" fill="#313131" />
      </svg>
    </C.PlaylistItem>
  )
}

function SkeletonSidebarItem() {
  return (
    <S.SidebarItem>
      <svg
        width="250"
        height="151"
        viewBox="0 0 250 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.490723" width="250" height="150" fill="#313131" />
      </svg>
    </S.SidebarItem>
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
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)
  const [selectedOption, setSelectedOption] = useState(null)
  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }
  return (
    <C.DropDownContainer>
      <C.FilterButton onClick={toggling}>{props.name}</C.FilterButton>
      {isOpen && !isYear && (
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
      {isOpen && isYear && (
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

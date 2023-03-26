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
import Pause from './img/pause.svg'
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
import { useEffect, useState, useRef } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import * as Skeleton from './Skeleton.js'
import { useThemeContext } from './App'

let timerId = setInterval(BarPlayer, 1000)
clearInterval(timerId)
function BarPlayer() {
  document.querySelector('.BarPlayerProgress').stepUp(1)
}

export function Bar(props) {
  const [isPlaying, setPlaying] = useState(false)
  const ref = useRef(null)
  const { theme } = useThemeContext()

  const handleStop = () => {
    ref.current.pause()
  }

  const handleStart = () => {
    ref.current.play()
  }
  return (
    <B.Bar style={{ background: theme.background }}>
      <B.BarContent>
        <B.BarPlayerProgress
          className="BarPlayerProgress"
          type="range"
          ref={ref}
          defaultValue="0"
          max="264"
        />
        <B.BarPlayerBlock>
          <B.BarPlayer>
            <B.PlayerControls>
              <B.ButtonPrev>
                <B.ButtonPrevSvg src={Prev} alt="prev"></B.ButtonPrevSvg>
              </B.ButtonPrev>
              <B.ButtonPlay onClick={() => play(isPlaying)}>
                <B.ButtonPlaySvg
                  className="play"
                  src={Play}
                  alt="play"
                ></B.ButtonPlaySvg>
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
              <audio
                id="audio"
                src="Bobby_Marleni_-_Dropin.mp3"
                ref={ref}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              ></audio>
              <B.TrackPlayContain>
                <B.TrackPlayImage>
                  <B.TrackPlaySvg src={Note} alt="note" />
                </B.TrackPlayImage>

                <B.TrackPlayAuthor>
                  <B.TrackPlayAuthorLink style={{ color: theme.color }}>
                    {props.name}
                  </B.TrackPlayAuthorLink>
                </B.TrackPlayAuthor>
                <B.TrackPlayAlbum>
                  <B.TrackPlayAlbumLink style={{ color: theme.color }}>
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

function play(arg) {
  var audio = document.getElementById('audio')
  if (arg) {
    audio.pause()
    document.querySelector('.play').setAttribute('src', Play)
    clearInterval(timerId)
  } else {
    audio.play()
    document.querySelector('.play').setAttribute('src', Pause)
    timerId = setInterval(BarPlayer, 1000)
  }
}

//function Time() {
// audio.currentTime =
//}

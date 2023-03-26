import styled, { createGlobalStyle } from 'styled-components'
export const Btntext = styled.button`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`
export const Btnicon = styled.button`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  :active .track-play__like-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const MainCenterblock = styled.div`
  width: 600px;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockSearch = styled.a`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  color: #ffffff;
`
export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`
export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  ::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  :-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--c, white);
  }
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: #ffffff;
`

export const DropDownContainer = styled('div')`
  width: 10.5em;
`

export const DropDownHeader = styled('div')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: #181818;
  &::placeholder {
    color: #ffffff;
  }
`

export const DropDownListContainer = styled('div')``

export const DropDownList = styled('ul')`
  width: 200px;
  height: 220px;
  position: absolute;
  z-index: 1;
  padding: 0;
  margin: 0;
  padding-left: 20px;
  background: #313131;
  border: 1px solid #181818;
  border-radius: 12px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  &:first-child {
    padding-top: 0.8em;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color: white;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`

export const DivYear = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 7px;
  width: 200px;
  height: 60px;
  background: #313131;
  border: 1px solid #181818;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

export const MainDrop = styled.div`
  display: flex;
`

export const ListItem = styled('button')`
  list-style: none;
  margin-bottom: 0.8em;
  background-color: transparent;
  color: white;
  border: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  &:focus {
    color: #b672ff;
    border-bottom: 2px dashed #b672ff;
    padding-bottom: 3px;
  }
`

export const FilterButton = styled.button`
  ${Btntext}
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #181818;
  color: #ffffff;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
`
export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
export const Track = styled.div`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  width: 447px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const Artist = styled.div`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  width: 321px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const Album = styled.div`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  width: 245px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const PlaylistSvg = styled.div`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  width: 60px;
  text-align: end;
`
export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`
export const TrackTitleImage = styled.div`
  width: 19px;
  height: 19px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;

  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackAlbum = styled.div`
  width: 245px;
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`

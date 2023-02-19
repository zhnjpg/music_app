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

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const SidebarPersonal = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`
export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`
export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`
export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`

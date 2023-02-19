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

export const MainNav = styled.div`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`
export const NavBurger = styled.div`
  width: 20px;
  height: 15px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`
export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`
export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  list-style-type: none;
`
export const MenuListItem = styled.li`
  color: #fff;
`
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`
export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

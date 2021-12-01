import React, { useContext, useState } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Toggle } from ".";

const Link = ({isActive, children, ...props}) => {
	return (
		<ReactRouterDomLink {...props} >
			{children}
		</ReactRouterDomLink>
	)
}

const Header = () => {
	const {pathname} = useLocation()
	const [menuOpen, setMenuOpen] = useState(false);
	const {id, setTheme} = useContext(ThemeContext)

  return (
    <HeaderWrapper>
			<MovileMenuIcon onClick={() => setMenuOpen(m => !m)}>
				<div />
				<div />
				<div />
			</MovileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink isActive={pathname === "/"} to="/">Home</StyledLink>
        <StyledLink isActive={pathname === "/login"} to="/login">Login</StyledLink>
				<Toggle isActive={id === 'light'} onToggle={setTheme}/>
      </Menu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
	border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${p => p.open ? 'block' : 'none'};
	font-family: 'Open Sans';
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	padding: 8px;
	box-sizing: border-box;
	border-bottom: 3px solid ${p=> p.theme.secondaryColor};
	background-color: ${p => p.theme.bodyBackgroundColor};

	@media(min-width: 768px) {
		display: flex;
		background: none;
		left: initial;
		top: initial;
		position: relative;
		width: initial;
		border-bottom: none;
		margin: auto 0 auto auto;
	}
`;

const StyledLink = styled(Link)`
	padding: 4px 8px;
	display: block;
	text-align: center;
	box-sizing: border-box;
	margin: auto 0;
	font-weight: ${p => p.isActive? "700" : ""};
	color: ${p => p.theme.bodyFontColor};
`

const MovileMenuIcon = styled.div`
	margin: auto 0 auto auto;
	width: 25px;
	min-width: 25px;
	padding: 5px;
	>div {
		height: 3px;
		background: ${p => p.theme.bodyFontColor};
		margin: 5px 0;
		width: 100%;
	}

	@media (min-width: 768px) {
		display: none;
	}
`

export {Header};

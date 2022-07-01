import React from "react";
import styled from "styled-components";
import CountryCodeGrid from "./CountryCodeGrid";

const StyledHeader = styled.h1`
	font-family: monospace;
	color: blue;
	text-align: center;
	margin: 20px 0px 20px 0px;
	padding: 50px 0px 50px 0px;
	background-color: rgb(252, 207, 207);
	border-top-left-radius: 50px;
	border-bottom-right-radius: 50px;
`;

const SubHeader = styled.h5`
	padding: 5px 0px 5px 0px;
	color: white;
	text-align: center;
	background: black;
`;

//simple header component
const Header = () => {
	return (
		<>
			<StyledHeader>
				Welcome to the Country Data App!
				<br /> Click on a 2-letter country code below:
			</StyledHeader>
			<SubHeader>
				Please note - when switching between the Random Country Button and
				Country Code tile selection, refresh window first! Thanks!
			</SubHeader>
			<CountryCodeGrid />
		</>
	);
};

export default Header;

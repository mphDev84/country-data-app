import React, { useState } from "react";
import styled from "styled-components";
import FetchData from "./FetchData";
import RefreshButton from "./RefreshButton";
import RandomCountryButton from "./RandomCountryButton";

const Wrapper = styled.div`
	position: absolute;
`;

const GridContainer = styled.div`
	display: grid;
	gap: 5px 10px;
	grid-template-columns: repeat(auto-fill, 36px);
	grid-template-rows: repeat(5, 1fr);
	background-color: rgb(33, 150, 243, 0.6);
	padding: 10px;
	border-radius: 20px;
	border: 1px solid blue;
`;

const GridItem = styled.button`
	background-color: rgba(255, 255, 255, 0.8);
	border: 2px solid rgba(0, 0, 0, 0.8);
	font-size: 15px;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
	&:active {
		transform: scale(1.7);
		border: 2px solid red;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const CountryCodeGrid = () => {
	//declare state variable
	const [codeValue, setCodeValue] = useState("");
	const buttonFunction = (e) => {
		const buttonValue = e.target.value;
		console.log(buttonValue);
		//assign button value to state
		setCodeValue(buttonValue);
	};

	const countryCodeArray = [
		"AD",
		"AE",
		"AF",
		"AG",
		"AI",
		"AL",
		"AM",
		"AN",
		"AO",
		"AQ",
		"AR",
		"AS",
		"AT",
		"AU",
		"AW",
		"AX",
		"AZ",
		"BA",
		"BB",
		"BD",
		"BE",
		"BF",
		"BG",
		"BH",
		"BI",
		"BJ",
		"BM",
		"BN",
		"BO",
		"BR",
		"BS",
		"BT",
		"BV",
		"BW",
		"BY",
		"BZ",
		"CA",
		"CC",
		"CD",
		"CF",
		"CG",
		"CH",
		"CI",
		"CK",
		"CL",
		"CM",
		"CN",
		"CO",
		"CR",
		"CU",
		"CV",
		"CX",
		"CY",
		"CZ",
		"DE",
		"DJ",
		"DK",
		"DM",
		"DO",
		"DZ",
		"EC",
		"EE",
		"EG",
		"EH",
		"ER",
		"ES",
		"ET",
		"EU",
		"FI",
		"FJ",
		"FK",
		"FM",
		"FO",
		"FR",
		"FX",
		"GA",
		"GB",
		"GD",
		"GE",
		"GF",
		"GG",
		"GH",
		"GI",
		"GL",
		"GM",
		"GN",
		"GP",
		"GQ",
		"GR",
		"GS",
		"GT",
		"GU",
		"GW",
		"GY",
		"HK",
		"HN",
		"HR",
		"HT",
		"HU",
		"ID",
		"IE",
		"IL",
		"IM",
		"IN",
		"IO",
		"IQ",
		"IR",
		"IS",
		"IT",
		"JE",
		"JM",
		"JO",
		"JP",
		"KE",
		"KG",
		"KH",
		"KI",
		"KM",
		"KN",
		"KP",
		"KR",
		"KW",
		"KY",
		"KZ",
		"LA",
		"LB",
		"LC",
		"LI",
		"LK",
		"LR",
		"LS",
		"LT",
		"LU",
		"LV",
		"LY",
		"MA",
		"MC",
		"MD",
		"ME",
		"MF",
		"MG",
		"MH",
		"MK",
		"ML",
		"MM",
		"MN",
		"MO",
		"MP",
		"MQ",
		"MR",
		"MS",
		"MT",
		"MU",
		"MV",
		"MW",
		"MY",
		"MX",
		"MZ",
		"NA",
		"NC",
		"NE",
		"NF",
		"NG",
		"NI",
		"NL",
		"NO",
		"NP",
		"NR",
		"NU",
		"NZ",
		"OM",
		"PA",
		"PE",
		"PF",
		"PG",
		"PH",
		"PK",
		"PL",
		"PT",
		"PW",
		"PY",
		"QA",
		"RE",
		"RS",
		"RO",
		"RU",
		"RW",
		"SA",
		"SB",
		"SC",
		"SD",
		"SE",
		"SG",
		"SH",
		"SI",
		"SJ",
		"SK",
		"SL",
		"SM",
		"SN",
		"SO",
		"SR",
		"SS",
		"ST",
		"SU",
		"SV",
		"SY",
		"SZ",
		"TC",
		"TD",
		"TF",
		"TG",
		"TH",
		"TJ",
		"TK",
		"TM",
		"TN",
		"TO",
		"TP",
		"TR",
		"TT",
		"TV",
		"TW",
		"TZ",
		"UA",
		"UG",
		"UK",
		"UM",
		"US",
		"UY",
		"UZ",
		"VA",
		"VC",
		"VE",
		"VG",
		"VI",
		"VN",
		"VU",
		"WF",
		"WS",
		"XK",
		"YE",
		"YT",
		"YU",
		"ZA",
		"ZM",
		"ZR",
		"ZW",
	];
	return (
		<>
			<GridContainer className="grid" id="grid">
				{countryCodeArray.map((element) => (
					<GridItem key={element} value={element} onClick={buttonFunction}>
						{element}
					</GridItem>
				))}
			</GridContainer>
			<ButtonWrapper>
				<RefreshButton />
				<RandomCountryButton />
			</ButtonWrapper>
			{/*<SubHeader>Or enter a country code below:</SubHeader>*/}
			<Wrapper className={codeValue ? "visible" : "hidden"}>
				<FetchData codeValue={codeValue} />
			</Wrapper>
			{/**Passing state variable to SearchBar component */}
		</>
	);
};
export default CountryCodeGrid;

/**<GridContainer>
				<GridItem>1</GridItem>
				<GridItem>2</GridItem>
				<GridItem>3</GridItem>
				<GridItem>4</GridItem>
				<GridItem>5</GridItem>
				<GridItem>6</GridItem>
				<GridItem>7</GridItem>
				<GridItem>8</GridItem>
				<GridItem>9</GridItem>
			</GridContainer> */

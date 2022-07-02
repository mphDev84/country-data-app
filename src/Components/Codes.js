import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CodeList = styled.h1`
	color: white;
`;

const CodeText = styled.h4`
	color: white;
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const Codes = () => {
	//declare state variables to store country codes 
	const [keys, setKeys] = useState([]);
	const [values, setValues] = useState([]);
	
	//function that assigns fetched data to state variables
	const myFunction = (keys, values) => {
		setKeys(keys);
		setValues(values);
	};

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": key goes here,
			"X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
		},
	};

	fetch(
		"https://countries-cities.p.rapidapi.com/location/country/list",
		options
	)
		.then((response) => response.json())
		.then((response) => {
			const data = response;
			const countries = data["countries"];//extract data from response (object format)
			const keys = Object.keys(countries).sort();//sort alphabetically
			const values = Object.values(countries).sort();//sort alphabetically 
			myFunction(keys, values);//send to function to store data in state variables 
		})
		.catch((err) => console.error(err));
	return (
		<>
			<CodeList>Codes</CodeList>
			<ListWrapper>//render all country codes 
				<ul className="keysList">
					{keys.map((element) => (
						<CodeText>{element}</CodeText>
					))}
				</ul>
				<ul className="valuesList">
					{values.map((element) => (
						<CodeText>{element}</CodeText>
					))}
				</ul>
			</ListWrapper>
		</>
	);
};

export default Codes;

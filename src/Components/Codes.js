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
	const [keys, setKeys] = useState([]);
	const [values, setValues] = useState([]);

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
			const countries = data["countries"];
			const keys = Object.keys(countries).sort();
			const values = Object.values(countries).sort();
			myFunction(keys, values);
		})
		.catch((err) => console.error(err));
	return (
		<>
			<CodeList>Codes</CodeList>
			<ListWrapper>
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

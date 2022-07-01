import React, { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "./SearchBar";

const DataHeader = styled.h1`
	font-family: monospace;
	color: rgb(255, 179, 25);
	background-color: rgb(0, 0, 0, 0.7);
	text-align: center;
	margin-top: 30px;
	margin-bottom: 0px;
	padding: 20px 0px 20px 0px;
	border-bottom-right-radius: 50px;
	border-top-left-radius: 50px;
`;

const Table = styled.table`
	height: 150px;
	align-self: flex-end;
	margin-right: 0px;
	margin-bottom: 90px;
	background-color: rgb(0, 0, 0, 0.7);
	border-bottom-right-radius: 25px;
	border-top-left-radius: 25px;
`;

const TableWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: rgb(140, 60, 80, 0.4);
	border-top-right-radius: 50px;
	border-top-left-radius: 50px;
	margin-top: 15px;
	padding-right: 20px;
`;

const DisplayData = ({ callingCode, capital, name, wikiDataId, flagUri }) => {
	//get state data (country code) from UserContext
	const state = useContext(UserContext);
	const countryCode = state;
	console.log("Country code is: " + countryCode); //test output

	const callingCodeValue = callingCode;
	const capitalValue = capital;
	const nameValue = name;
	const wikiDataIdValue = wikiDataId;
	const flagUriValue = "'" + flagUri + "'";

	console.log(
		"data is: " +
			callingCodeValue +
			" " +
			capitalValue +
			" " +
			nameValue +
			" " +
			wikiDataIdValue +
			" flag URI: " +
			flagUriValue
	);

	const FlagDiv = styled.svg`
		display: block;
		height: 600px;
		width: 1000px;
		background: url(${flagUriValue});
	`;

	return (
		<>
			<DataHeader>Showing Data For {nameValue}:</DataHeader>
			{/**Below we check to see if any data is available from the fetch - if yes, make table of data VISIBLE */}
			<TableWrapper>
				<FlagDiv />
				<Table className={callingCodeValue ? "visible" : "hidden"}>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Capital</th>
							<th>Calling Code</th>
							<th>Wiki Data Id</th>
						</tr>
						<tr>
							<td>{nameValue}</td>
							<td>{capitalValue}</td>
							<td>{callingCodeValue}</td>
							<td>{wikiDataIdValue}</td>
						</tr>
					</tbody>
				</Table>
			</TableWrapper>
		</>
	);
};

export default DisplayData;

import React, { createContext, useRef, useState } from "react";
import styled from "styled-components";
import FetchData from "./FetchData";
import RefreshButton from "./RefreshButton"; //simple button component that refreshes the page

const SearchBarForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const UserInput = styled.input`
	padding: 8px 10px 8px 10px;
	border-radius: 15px;
	width: 400px;
`;

const InputButton = styled.button`
	margin-left: 10px;
	width: 60px;
	height: 30px;
	font-family: Georgia;
	letter-spacing: 2px;
	border: solid green 4px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
	&:active {
		cursor: pointer;
		transform: scale(1.2);
	}
`;
//create state context variable so data can be passed to child components
export const UserContext = createContext();
//search bar component
const SearchBar = ({ codeValue }) => {
	//destructure and assign passed state variable (from CountryCodeGrid.js) to new variable
	const myCodeValue = codeValue;

	//obtain user input
	const userFormData = (e) => {
		e.preventDefault();
		const userValue = inputRef.current.value.toUpperCase();
		console.log(userValue);
		if (userValue == "") {
			alert("please enter a valid country code");
		}
		setCountryCode(userValue);
		console.log("state value: ", countryCode);
		e.currentTarget.reset();
	};

	const inputRef = useRef(); //create a reference (key) so that user input can be accessed
	const [countryCode, setCountryCode] = useState(""); //state state variables
	return (
		<>
			{/* THIS IS AN OPTIONAL SEARCH BAR FOR USE INSTEAD OF THE USER CLICKING ON THE GRID OF BUTTONS

			<SearchBarForm onSubmit={userFormData}>
				<UserInput
					className="input"
					type="text"
					name="countryCode"
					ref={inputRef}
					placeholder="enter country code (i.e US, CA, GB, DE etc)"
				></UserInput>
				<InputButton className="userInputButton" type="submit" value="submit">
					Go!
				</InputButton>
				<RefreshButton />
			</SearchBarForm>
		*/}
			<UserContext.Provider value={countryCode}>
				<FetchData codeValue={myCodeValue} />
				{/**Pass button value one more time to FetchData.js */}
			</UserContext.Provider>
		</>
	);
};

export default SearchBar;

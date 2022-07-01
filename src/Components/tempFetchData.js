import React, { useContext, useState } from "react";
import { UserContext } from "./SearchBar";
import styled from "styled-components";
import DisplayData from "./DisplayData";
import DisplayCountryData from "./DisplayCountryData";

const FetchData = ({ codeValue }) => {
	let myCodeValue;

	//get state data (country code) from UserContext
	const state = useContext(UserContext);
	let countryCode = state;
	console.log("Country code is: " + countryCode); //test output

	//button value from CountryCodeGrid component
	myCodeValue = codeValue;
	console.log(myCodeValue);

	/*NOTE:::::we now have two variables to use for the fetch function, one from user text field input, and the other
	from a button click from the grid of 2-letter country codes. Either can be used to fetch data*/

	//define state variables
	const [callingCode, setCallingCode] = useState("");
	const [capital, setCapital] = useState("");
	const [name, setName] = useState("");
	const [wikiDataId, setWikiDataId] = useState("");
	const [flagUri, setFlagUri] = useState("");

	const [currency, setCurrency] = useState("");
	const [currency_name, setCurrency_name] = useState("");
	const [currency_symbol, setCurrency_symbol] = useState("");
	const [timeZone_name, setTimezone_name] = useState("");
	const [timeZone_diff, setTimezone_diff] = useState("");
	const [timeZone_abbr, setTimezone_abbr] = useState("");

	//data fetch function
	const dataFetchFunction = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855",
				"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
			},
		};

		fetch(
			`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${myCodeValue}`,
			options
		)
			.then((response) => {
				if (response.status === 404) {
					alert("PLEASE ENTER A VALID COUNTRY CODE!!");
				}
				return response.json();
			})
			.then((response) => {
				const data = response;
				const callingCode = response["data"]["callingCode"];
				const capital = response["data"]["capital"];
				const name = response["data"]["name"];
				const wikiDataId = response["data"]["wikiDataId"];
				const flagImage = response["data"]["flagImageUri"];

				countryDataFetchFunction(name);

				//assign fetch data to state variable
				setCallingCode(callingCode);
				setCapital(capital);
				setName(name);
				setWikiDataId(wikiDataId);
				setFlagUri(flagImage);

				//test output
				console.log(
					"callingcode: " + callingCode,
					"capital: " + capital,
					"name: " + name,
					"id: " + wikiDataId,
					"flag URI: " + flagImage,
					data
				);
			})
			.catch((err) => console.error(err));
	};

	if (myCodeValue !== "") {
		dataFetchFunction();
	}
	if (countryCode !== "") {
		dataFetchFunction();
	}
	//a second fetch function to a separate API endpoint - this fetch is based on the original user input.
	//the user enters a country code, and from the 'Name' value extracted from the data, a second fetch is called.
	const countryDataFetchFunction = (name) => {
		let nameValue = name;
		if (nameValue === "United States of America") {
			nameValue = "United States";
		}
		console.log(nameValue);
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855",
				"X-RapidAPI-Host": "geodata7.p.rapidapi.com",
			},
		};

		fetch(`https://geodata7.p.rapidapi.com/country?name=${nameValue}`, options)
			.then((response) => response.json())
			.then((response) => {
				const data = response;
				const currency_name = response["currency_name"];
				const currency = response["currency"];
				const currency_symbol = response["currency_symbol"];
				const timeZone_abbr = response["timezones"][0]["abbreviation"];
				const timeZone_name = response["timezones"][0]["tzName"];
				const timeZone_diff = response["timezones"][0]["gmtOffsetName"];
				if (response["timezones"].length > 1) {
					alert("NOTE: more than one timezone in this country");
				}

				//assign data to state variables
				setCurrency(currency);
				setCurrency_name(currency_name);
				setCurrency_symbol(currency_symbol);
				setTimezone_name(timeZone_name);
				setTimezone_abbr(timeZone_abbr);
				setTimezone_diff(timeZone_diff);

				//test output
				console.log(
					"Currency name: ",
					currency_name,
					", CURRENCY: ",
					currency,
					", Currency symbol: ",
					currency_symbol,
					", time zone abbr: ",
					timeZone_abbr,
					", time zone name: ",
					timeZone_name,
					", time zone GMT difference: ",
					timeZone_diff,
					data
				);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<DisplayData
				callingCode={callingCode}
				capital={capital}
				name={name}
				wikiDataId={wikiDataId}
				flagUri={flagUri}
			/>
			<DisplayCountryData
				currency={currency}
				currency_name={currency_name}
				currency_symbol={currency_symbol}
				timeZone_name={timeZone_name}
				timeZone_abbr={timeZone_abbr}
				timeZone_diff={timeZone_diff}
			/>
		</>
	);
};

export default FetchData;

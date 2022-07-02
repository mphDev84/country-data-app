import React, { useState } from "react";
import DisplayData from "./DisplayData";
import DisplayCountryData from "./DisplayCountryData";

const FetchData = ({ codeValue }) => {
	let myCodeValue;

	//button value from CountryCodeGrid component
	myCodeValue = codeValue;
	console.log(myCodeValue);

	//define state variables
	const [callingCode, setCallingCode] = useState("");
	const [capital, setCapital] = useState("");
	const [name, setName] = useState("");
	const [wikiDataId, setWikiDataId] = useState("");
	const [flagUri, setFlagUri] = useState("");

	const [area_size, setAreaSize] = useState("");
	const [currency_code, setCurrencyCode] = useState("");
	const [currency_name, setCurrencyName] = useState("");
	const [population, setPopulation] = useState("");
	const [cities, setCities] = useState("");
	const [tld_value, setTldValue] = useState("");
	const [continent, setContinent] = useState("");
	const [wiki_url, setWikiUrl] = useState("");

	//data fetch function
	const dataFetchFunction = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": key goes here,
				"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
			},
		};

		fetch(
			`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${myCodeValue}`,
			options
		)
			.then((response) => {
				if (response.status === 404) {
					alert(
						"PLEASE ENTER A VALID COUNTRY CODE!! - It may be that the selected country code is now defunct"
					);
				}
				return response.json();
			})
			.then((response) => {
				//extract data from JSON response
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

	//a second fetch function to a separate API endpoint - this fetch is based on the original user input.
	//the user enters a country code, and from the 'Name' value extracted from the data, a second fetch is called.
	const countryDataFetchFunction = (name) => {
		let nameValue = name;
		//API endpoint doesn't recognize 'of America', so is removed from string
		if (nameValue === "United States of America") {
			nameValue = "United States";
		}
		console.log(nameValue);
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": key goes here,
				"X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
			},
		};

		fetch(
			`https://countries-cities.p.rapidapi.com/location/country/${myCodeValue}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				//extract data from JSON response
				const data = response;
				let area = data["area_size"]; //extract area size value
				let area_commas = area.toLocaleString("en-US"); //convert value to string
				const area_size = area_commas
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //use Reg. Expression to insert commas in number value
				const currency_code = data["currency"]["code"];
				const currency_name = data["currency"]["name"];
				let num = data["population"]; //extract population value
				let commas = num.toLocaleString("en-US"); //convert value to string
				const population = commas
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //use Reg. Expression to insert commas in number value
				const cities = data["total_cities"];
				const tld_value = data["tld"];
				const continent = data["continent"]["name"];
				const wiki_url = data["wiki_url"];

				setAreaSize(area_size);
				setCurrencyCode(currency_code);
				setCurrencyName(currency_name);
				setPopulation(population);
				setCities(cities);
				setTldValue(tld_value);
				setContinent(continent);
				setWikiUrl(wiki_url);

				console.log(data);
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
				area_size={area_size}
				currency_code={currency_code}
				currency_name={currency_name}
				population={population}
				cities={cities}
				tld_value={tld_value}
				continent={continent}
				wiki_url={wiki_url}
			/>
		</>
	);
};

export default FetchData;

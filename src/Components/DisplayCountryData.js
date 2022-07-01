import React from "react";
import styled from "styled-components";

const Table = styled.table`
	text-align: right;
	height: 150px;
	align-self: center;
	margin-right: 50px;
	background-color: rgb(0, 0, 0, 0.7);
	border-bottom-right-radius: 25px;
	border-top-left-radius: 25px;
`;

const TableWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	padding-left: 50px;
	background-color: rgb(210, 10, 90, 0.4);
	border-radius: 50px;
`;

const DisplayCountryData = ({
	area_size,
	currency_code,
	currency_name,
	population,
	cities,
	tld_value,
	continent,
	wiki_url,
}) => {
	const areaSize = area_size;
	const currencyNameValue = currency_name;
	const currencyCodeValue = currency_code;
	const populationValue = population;
	const citiesValue = cities;
	const tldValue = tld_value;
	const continentValue = continent;
	const wikiUrlValue = wiki_url;

	console.log(
		areaSize,
		currencyNameValue,
		currencyCodeValue,
		populationValue,
		citiesValue,
		tldValue
	);

	return (
		<>
			<TableWrapper>
				<Table className={areaSize ? "visible" : "hidden"}>
					<tbody>
						<tr>
							<th>Area Size</th>
							<th>Continent</th>
							<th>Currency Name</th>
							<th>Currency Code</th>
							<th>Population</th>
							<th>No. of cities</th>
							<th>tld:</th>
							<th>Wiki Url</th>
						</tr>
						<tr>
							<td>{areaSize}</td>
							<td>{continentValue}</td>
							<td>{currencyNameValue}</td>
							<td>{currencyCodeValue}</td>
							<td>{populationValue}</td>
							<td>{citiesValue}</td>
							<td>{tldValue}</td>
							<td>
								<a href={wikiUrlValue} target="_blank">
									{wikiUrlValue}
								</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</TableWrapper>
		</>
	);
};
export default DisplayCountryData;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Codes from "./Components/Codes";
import styled from "styled-components";

const UnorderedList = styled.ul`
	background-color: #333;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const NavBarItem = styled.p`
	font-family: monospace;
	font-size: 20px;
	margin-left: 30px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<UnorderedList className="navBar">
			<NavBarItem>
				<Link to="/">Home/Back to App</Link>
			</NavBarItem>
			<NavBarItem>
				<Link to="/codes">Get a List of Country Codes</Link>
			</NavBarItem>
		</UnorderedList>
		<hr />
		<Routes>
			<Route exact path="/" element={<App />}></Route>
		</Routes>
		<Routes>
			<Route path="/codes" element={<Codes />}></Route>
		</Routes>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

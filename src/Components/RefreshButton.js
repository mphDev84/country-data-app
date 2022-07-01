import React from "react";
import styled from "styled-components";

//Simple Button component that refreshes the page

const Button = styled.button`
	margin-right: 10px;
	width: 100px;
	height: auto;
	font-family: Georgia;
	letter-spacing: 2px;
	border: solid blue 4px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
	&:active {
		cursor: pointer;
		transform: scale(1.2);
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const RefreshButton = () => {
	const refreshFunction = () => {
		return window.location.reload();
	};
	return (
		<>
			<ButtonWrapper>
				<Button onClick={refreshFunction}>Refresh Window</Button>
			</ButtonWrapper>
		</>
	);
};
export default RefreshButton;

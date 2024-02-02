// home.jsx
import React from "react";
import { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";


//create your first component
function Home() {
	const [counter, SetCounter] = useState(0);

	useEffect(() => {

		const interval = setInterval(() => {
			SetCounter(counter => counter + 1)
		}, 1000);
		console.log(counter)

		// componet unmount
		return () => clearInterval(interval)

	}, [counter])

	// no dependency array: constantly update as needed
	// empty dependency array: run once
	// array with state variable: only update when state changes

	function calculateSeconds(aCounter, placeValue) {
		return Math.floor(aCounter / placeValue) % 10
	}

	return (
		<>
			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			hundredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			
			
			
			/>
		</>
	)
}

export default Home;

// useState, useEffect, setInterval, props 
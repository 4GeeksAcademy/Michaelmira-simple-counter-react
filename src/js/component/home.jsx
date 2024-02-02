// home.jsx
import React from "react";
import { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "./lib/time";


//create your first component
function Home() {
	const [counter, SetCounter] = useState(0);

	useEffect(() => {
		// componet mounting
		const interval = setInterval(() => {
			SetCounter(counter => counter + 1)
		}, 1000);

		// componet unmount
		return () => clearInterval(interval)

	}, [counter])

	// no dependency array: constantly update as needed
	// empty dependency array: run once
	// array with state variable: only update when state changes

	

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
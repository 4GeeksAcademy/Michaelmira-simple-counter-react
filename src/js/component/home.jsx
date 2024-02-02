// home.jsx
import React from "react";
import { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "./lib/time";


//create your first component
function Home() {
	const [counter, SetCounter] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		// componet mounting
		const interval = setInterval(() => {
			if (!isPaused) {
			SetCounter((prevCounter) => prevCounter + 1)
			}
		}, 1000);

		// componet unmount
		return () => clearInterval(interval);3

	}, [isPaused]);
	

	// no dependency array: constantly update as needed
	// empty dependency array: run once
	// array with state variable: only update when state changes

	const togglePause = () => {
		setIsPaused((prevIsPaused) => !prevIsPaused);
	};
	
	return (
		<>
			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			hundredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			/>
			<button onClick={togglePause}>
				{isPaused ? "Resume" : "Pause" }
			</button>
		</>
	);
}

export default Home;

// useState, useEffect, setInterval, props 
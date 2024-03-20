// home.jsx
import React from "react";
import { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "./lib/time";


//create your first component
function Home() {
	const [counter, SetCounter] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [countdownValue, setCountdownValue] = useState(0);

	useEffect(() => {
		// componet mounting
		const interval = setInterval(() => {
			if (!isPaused && counter > 0) {
			SetCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		// componet unmount
		return () => clearInterval(interval);3

	}, [isPaused, counter]);
	

	// no dependency array: constantly update as needed
	// empty dependency array: run once
	// array with state variable: only update when state changes

	const togglePause = () => {
		setIsPaused((prevIsPaused) => !prevIsPaused);
	};

	const handleCountdownInputChange = (event) => {
		const inputValue = parseInt(event.target.value, 10);
		setCountdownValue(isNaN(inputValue) ? 0 : inputValue);
		SetCounter(inputValue);
	};
	return (
		<>
			<SimpleCounter 
			thousandsDigit = {calculateSeconds(counter, 1000)}
			hundredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			/>
			<div className="d-flex justify-content-center">
				<div className="div">
					<div className="row">
						<div className="col">
							<h5 className="d-flex" >Set Countdown:</h5>
						</div>
						<div className="col">
							<input 
							type ="number"
							value = {countdownValue}
							onChange= {handleCountdownInputChange}
							/>

							
						</div>
						<div className="col">
							<button onClick={togglePause}>
								{isPaused ? "Resume" : "Pause" }
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;

// useState, useEffect, setInterval, props 
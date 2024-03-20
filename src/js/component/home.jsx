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
							<h5 className="" >Set Countdown:</h5>
						</div>
						<div className="col pt-3">
							<input 
							type ="number"
							value = {countdownValue}
							onChange= {handleCountdownInputChange}
							/>

							
						</div>
						<div className="col pt-3">
						<button
							style={{
								backgroundColor: isPaused ? '#FF5733' : '#4CAF50', /* Red when paused, Green when not paused */
								border: 'none',
								color: 'white',
								padding: '15px 32px',
								textAlign: 'center',
								textDecoration: 'none',
								display: 'inline-block',
								fontSize: '16px',
								margin: '4px 2px',
								transitionDuration: '0.4s',
								cursor: 'pointer',
								borderRadius: '12px'
							}}
							onClick={togglePause}
							onMouseOver={(e) => e.target.style.backgroundColor = isPaused ? '#FF8C7B' : '#45a049'} /* Darker Green when not paused */
							onMouseOut={(e) => e.target.style.backgroundColor = isPaused ? '#FF5733' : '#4CAF50'} /* Original Green when not paused */
						>
							{isPaused ? "Resume" : "Pause"}
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
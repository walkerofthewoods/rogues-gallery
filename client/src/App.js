import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Field from './components/Field';
import './index.css';

function App() {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);
	const [ childKey, setChildKey ] = useState(0);

	if (score > highScore) {
		setHighScore(score);
	}

	if (score === -1) {
		setChildKey(Math.random());
		setScore(0);
	}

	return (
		<div>
			<Scoreboard score={score} highScore={highScore} />
			<div className="wrapper">
				<Field key={childKey} score={score} setScore={setScore} />
			</div>
			<footer>All images courtesy superheroapi.com</footer>
		</div>
	);
}

export default App;

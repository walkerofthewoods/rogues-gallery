import React from 'react';

const Scoreboard = (props) => {
	return (
		<header>
			<h2 style={{ float: 'left' }}>Rogues' Gallery</h2>
			<h2 style={{ float: 'right' }}>
				Current Score: {props.score} High Score: {props.highScore}
			</h2>
			<h4 style={{ textAlign: 'center' }}>How to win: Click on each character exactly once.</h4>
		</header>
	);
};

export default Scoreboard;

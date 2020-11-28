import React, { useEffect, useState } from 'react';
import shuffle from './shuffle';
import axios from 'axios';
import '../index.css';

const Field = (props) => {
	const boardSize = 12;
	const superheroApiSize = 731;
	const deckSeed = [];
	for (let k = 1; k <= superheroApiSize; k++) {
		deckSeed.push(k);
	}
	shuffle(deckSeed);

	const [ deck, setDeck ] = useState([]);
	const [ order, setOrder ] = useState(deckSeed);

	useEffect(() => {
		setDeck([]);
		fetchData();
	}, []);

	async function fetchData() {
		for (let i = 0; i < boardSize; i++) {
			try {
				const response = await axios.get(`/superheroproxy?id=${order[i]}`);
				setDeck((deck) => [ ...deck, { name: response.data.name, url: response.data.url, clicked: false } ]);
			} catch (err) {
				console.log(err);
			}
		}
	}

	function clicked(cardname) {
		let index = deck.findIndex((element) => element.name === cardname);

		if (index >= 0) {
			if (deck[index].clicked === true) {
				alert('you lose...');
				props.setScore(-1); //reset
				return;
			}
		}

		props.setScore(props.score + 1);
		if (props.score >= boardSize) {
			alert('You win!');
			props.setScore(-1); //reset
			return;
		}

		let temp = [ ...deck ];
		temp[index].clicked = true;
		shuffle(temp);
		setDeck(temp);
	}

	return deck.map((card) => (
		<figure key={card.name} onClick={() => clicked(card.name)}>
			<img className="card" src={card.url} alt={card.name} onError={() => props.setScore(-1)} />
			<figcaption>{card.name}</figcaption>
		</figure>
	));
};

export default Field;

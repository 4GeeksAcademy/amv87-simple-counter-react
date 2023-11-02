import React from "react";
import Counter from "./counter";
import { useEffect } from 'react';

const second {
	'1' 
}

const Home = (props) => {
	return (
		<div className="container mt-5">
			<div className="d-flex flex-row justify-content-evenly rounded align-items-center" style={{width: '80rem', height:'16rem', backgroundColor: 'rgb(9, 9, 9)'}}>
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter />
				<Counter number={second} />
			</div>
		</div>
	);
};

export default Home;

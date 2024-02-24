import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const Ratings = ({ value }) => {
	const [star, setStar] = useState([]);

	useEffect(() => {
		setStar(Math.round(value));
	}, [value]);
	console.log(star, value);
	return (
		<>
			<ul className="ratings-stars">
				{[...Array(star)].map((star, index) => (
					<li key={index}>
						<AiFillStar />
					</li>
				))}
			</ul>
		</>
	);
};

export default Ratings;

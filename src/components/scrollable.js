import React from 'react';
import Card from './card';
import { data } from '../data.js';
import { Link } from 'react-router-dom';

const Scrollable = ({ title, cardsList, onTitleClick }) => {
	return (
		<section className="px-4 py-10  md:px-16" id="scroll-section">
			<div className="max-w-1400 mx-auto">
				<Link
					className="text-2xl mb-4 pl-4 text-[#d50e25]  tracking-wider inline-block  font-lato font-extrabold"
					to={onTitleClick}
				>
					{title}
				</Link>
				<ul className="flex overflow-x-auto snap-x snap-mandatory shadow border border-gray-200 py-2 snap-center pt-4  rounded-xl ">
					{cardsList.map((card, index) => (
						<Card
							key={index}
							id={card.id}
							title={card.title}
							image={card.image}
							price_before={card.price_before}
							price_after={card.price_after}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Scrollable;

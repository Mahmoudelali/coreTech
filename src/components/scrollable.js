import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

const Scrollable = ({ title, cardsList, onTitleClick, setDisplayedImage }) => {
	return (
		<section className="py-10  md:px-16" id="scroll-section">
			<div className="max-w-1400 mx-auto">
				<Link
					className="text-2xl mb-4 pl-4 text-[#d50e25]  tracking-wider inline-block  font-lato font-extrabold"
					to={onTitleClick}
				>
					{title}
				</Link>
				<div className="flex overflow-x-auto snap-x snap-mandatory shadow border border-gray-200 py-2 snap-center pt-4  rounded-xl ">
					{cardsList.map((card, index) => (
						<Card
							setDisplayedImage={setDisplayedImage}
							key={index}
							id={card.id}
							title={card.title}
							image={card.imagesList[0]}
							price_before={card.price_before}
							price_after={card.price_after}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Scrollable;

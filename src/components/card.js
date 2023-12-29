import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, image, id, price_after, price_before }) => {
	return (
		<Link
			to={`/products/${id}`}
			className="flex cursor-pointer flex-col pb-4 flex-shrink-0 w-[220px] h-[300px] min-h-full px-5 pt-4 bg-white rounded-lg  snap-center transition duration-200  "
		>
			<div className="flex items-center basis-[80%]  border-2 shadow-lg rounded-md hover:shadow-2xl duration-200 max-h-[250px] overflow-hidden ">
				<img src={image} className="w-full h-full object-cover" />
			</div>
			<div className="flex flex-col mt-7 ml-2">
				<h3 className="uppercase">{title}</h3>
				<p>
					<span className="font-semibold mr-2 line-through">
						${price_before}
					</span>{' '}
					-
					<span className="font-semibold mr-2 text-accent">
						{' '}
						${price_after}
					</span>
				</p>
			</div>
		</Link>
	);
};

export default Card;

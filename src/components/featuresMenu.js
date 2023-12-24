import React from 'react';

const FeaturesMenu = ({ title, list }) => {
	return (
		<div>
			<h4 className=" relative text-2xl mb-3  text-gray-700 font-extrabold tracking-wide font-lato">
				<span className="absolute top-full left-0 h-[3px] w-12 bg-accent  rounded-md mt-1"></span>
				{title}
			</h4>
			<div className="mt-3">
				{list.map((feature, index) => {
					return (
						<article
							className="mb-1 text-black text-sm font-semibold font-lato tracking-wider"
							key={index}
						>
							{feature}
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturesMenu;

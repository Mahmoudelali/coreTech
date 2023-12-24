import React from 'react';

const DescriptionCard = ({ icon, title, description }) => {
	return (
		<div
			className="w-[47%] aspect-square  flex flex-col items-center   rounded-md py-4 bg-white hover:scale-105 transition-all duration-300  px-1" 
			// shadow-lg
			// style={{ borderWidth: '1px', borderColor: '#d50e2570' }}
		>
			<span className="basis-1/5 text-2xl text-accent ">{icon}</span>
			<h4 className="font-bold mt-4 text-gray-800 font-lato tracking-wide">{title}</h4>
			<p className="text-center text-sm mt-1 text-gray-800">
				{description}
			</p>
		</div>
	);
};

export default DescriptionCard;

import React from 'react';

const ContactInfo = ({ title, content, icon }) => {
	return (
		<div className="flex mb-4">
			<div className="h-8 w-8 flex justify-center items-center basis-1/5 rounded-full">
				<span className="text-accent text-xl">{icon}</span>
			</div>
			<div className=" basis-4/5">
				<h4 className="font-semibold text-accent font-lato">{title}</h4>
				<p className="text-gray-700 font-lato text-sm">{content}</p>
			</div>
		</div>
	);
};

export default ContactInfo;

import React from 'react';

const LabelInput = ({ placeholder }) => {
	return (
		<input
			type="text"
			className="w-full border-0 border-b border-gray-300 block p-1 placeholder:text-sm placeholder:ml-1 leading-8 text-sm"
			placeholder={placeholder}
		/>
	);
};

export default LabelInput;

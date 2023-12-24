import React from 'react';

const Tag = ({ title, color, bgColor }) => {
	return (
        <span
            id='tag-badge'
			className={`tracking-widest  rounded-md mt-2 w-max text-[10px] mx-auto block py-[1px] px-2 bg-opacity-10 font-lato font-bold`}
			style={{
				color: color ? color : '#0b0b0b',
				backgroundColor: `${bgColor}20`,
			}}
		>
			{title}
		</span>
	);
};

export default Tag;

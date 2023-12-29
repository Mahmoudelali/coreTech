import React from 'react';
import { data } from '../../data';

const SideLinks = () => {
	return (
		<section className=" fixed top-[40%] -translate-y-1/2 right-2  z-50 ">
			{data.sideLinks.map(({ icon, name, url, bgcolor }, index) => {
				return (
					<div
						key={index}
						className="w-7 h-7 mb-3 p-1 rounded-md flex items-center justify-center"
						style={{ backgroundColor: bgcolor }}
					>
						<a
							href={url}
							target="_blank"
							className="text-center block text-white text-xl"
						>
							{icon}
						</a>
					</div>
				);
			})}
		</section>
	);
};

export default SideLinks;

import React from 'react';
import { data } from '../../data';

const SideLinks = () => {
	return (
		<section className=" fixed top-[60%] -translate-y-1/2 right-2  z-50 ">
			{data.sideLinks.map(
				({ icon, name, url, bgcolor, onClick }, index) => {
					return (
						<div
							key={index}
							className="w-7 h-7 mb-3 p-1 rounded-md flex items-center justify-center"
							style={{ backgroundColor: bgcolor }}
						>
							{url ? (
								<a
									onClick={onClick ? onclick : () => ''}
									href={url}
									target={url != '' ? '_blank' : ''}
									className="text-center block text-white text-xl"
								>
									{icon}
								</a>
							) : (
								<button
									onClick={onClick ? onClick : () => ''}
									className="text-center block text-white text-xl"
								>
									{icon}
								</button>
							)}
						</div>
					);
				},
			)}
		</section>
	);
};

export default SideLinks;

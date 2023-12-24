import React from 'react';
import { data } from '../../data';

const Footer = () => {
	return (
		<div className="h-[60vh] bg-accent  text-white ">
			<div className="px-5 pt-12 flex flex-col h-full pb-[12vh]">
				<h2 className="font-extrabold uppercase  font-blackops tracking-widest text-white text-center text-3xl mb-2">
					{data.title}
				</h2>
				<p className="text-center text-sm mb-4 tracking-widest font-lato ">
					l Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Cumque, numquam quod? Error omnis ipsum culpa deleniti
				</p>
				<div className="flex  justify-center gap-3">
					{data.sideLinks.map((link, index) => {
						return (
							<a
								key={index}
								href={link.url}
								className="border border-white rounded-full w-9 h-9 text-xl flex justify-center items-center"
							>
								{link.icon}
							</a>
						);
					})}
				</div>
				<div className="text-white text-sm text-center mt-auto">
					{' '}
					copyrights &copy; {data.title} 2020, All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;

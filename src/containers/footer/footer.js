import React from 'react';
import { data } from '../../data';
import { copyProductUrlToClipboard, copyUrlToClipboard } from '../../helpers';

const Footer = () => {
	return (
		<div className="h-[30vh] bg-accent  text-white ">
			<div className="px-5 pt-5 flex flex-col  h-full pb-[10vh]">
				<h2 className="font-extrabold uppercase font-blackops tracking-widest text-white text-center text-3xl mb-2">
					{data.title}
				</h2>

				<div className="flex  justify-center gap-3  mb-2">
					{data.sideLinks.map((link, index) => {
						return link.url == '' ? (
							<button
								key={index}
								onClick={() => copyUrlToClipboard()}
								className="border border-white rounded-full w-9 h-9 text-xl flex justify-center items-center"
							>
								{link.icon}
							</button>
						) : (
							<a
								key={index}
								href={link.url}
								target="_blank"
								className="border border-white rounded-full w-9 h-9 text-xl flex justify-center items-center"
							>
								{link.icon}
							</a>
						);
					})}
				</div>
				<div className="text-white text-sm text-center mt-auto">
					{' '}
					copyrights &copy; {data.title} 2024, All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;

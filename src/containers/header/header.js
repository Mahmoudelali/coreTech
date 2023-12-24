import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { data } from '../../data';

const Header = () => {
	const [active, setActive] = useState('home');
	const [safeArea, setSafeArea] = useState(window.innerHeight);

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setVisible(
				prevScrollPos > currentScrollPos || currentScrollPos < 10,
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	useEffect(() => {
		const setHeight = () => {
			const currH = window.innerHeight;
			document.body.style.height = `${currH}px`;
			setSafeArea(currH);
		};
		window.addEventListener('resize', setHeight);
	}, [window.innerHeight]);

	return (
		<div className={`main-header ${visible ? '' : 'hidden'}`}>
			<header className="h-16 w-screen bg-white flex justify-center items-center px-3 shadow-md fixed top-0 left-0 z-40 overflow-x-hidden">
				<Link
					to="/"
					className="text-black  font-extrabold uppercase  font-blackops tracking-widest"
				>
					{data.title}
				</Link>
			</header>
			<footer
				style={{ top: `${safeArea - 60}px` }}
				className={` bg-white  text-accent h-[60px] w-screen fixed top-[90vh] left-0 flex items-center justify-center p-2 shadow-md z-30 transition-all duration-500 gap-x-6 border-t`}
			>
				{data.linksArray.map(
					({ text, to, outline_icon, filled_icon }, index) => (
						<Link
							className="tracking-wider text-accent  p-1 rounded text-center inline-block"
							key={index}
							to={to}
							onClick={() => {
								setActive(text);
							}}
						>
							<span className="text-xl text-center flex justify-center">
								{text == active ? filled_icon : outline_icon}
							</span>
							<span className="text-sm">{text}</span>
						</Link>
					),
				)}
			</footer>
		</div>
	);
};

export default Header;

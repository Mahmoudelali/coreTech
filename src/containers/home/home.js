import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data';
import Scrollable from '../../components/scrollable';
import DescriptionCard from '../../components/descriptionCard';
import heroImage from '../../assets/images/Ins_1738263851.jpg';

const Home = () => {
	const [height, setHeight] = useState('540px');
	const products = data.products;
	const descrition = data.descriptions;
	const heroData = data.heroSection;
	const secondary = data.secondarySection;

	return (
		<div className="pb-10 bg-[#fcfcfc]">
			<section
				id="hero-section"
				className="text-gray flex flex-col justify-center h-screen px-5 -translate-y-3  "
			>
				<div className="flex justify-center mb-4 image-container">
					<img src={heroData.image} className="hero-image" />
				</div>
				<img
					src={heroImage}
					className="object-cover h-full w-full absolute inset-0"
				/>

				<div className="hero-data z-20 ">
					<h2 className="text-[#16161D] text-3xl  mb-4 font-bold tracking-wider uppercase">
						{heroData.title}
					</h2>
					<p className="text-lg  tracking-widest text-[#00070] font-lato font-semibold text-black pr-10 ">
						{heroData.content}
					</p>

					<Link
						to="/products"
						className="text-white mt-6 inline-block bg-accent bg-opacity-70  px-8 py-2 rounded-2xl font-semibold mx-auto"
					>
						See more!
					</Link>
				</div>
			</section>
			<section className="px-2 -translate-y-3 py-20">
				<div className="mb-2 image-container basis-3/5 flex items-center">
					<img
						src={heroData.imagePrimary}
						className="object-cover w-full max-h-full hero-data "
					/>
				</div>
				<div className="basis-2/5  image-container my-3 px-4">
					<h2 className=" text-xl  mb-2 font-bold tracking-wider font-lato">
						{secondary.title}
					</h2>
					<div className="text-sm  tracking-widest text-[#00070] font-lato font-semibold">
						{secondary.content}
					</div>
				</div>
				<div className="mb-2 image-container basis-3/5 flex items-center">
					<img
						src={heroData.imageSecondary}
						className="object-cover w-full max-h-full hero-data "
					/>
				</div>
			</section>
			<section className="px-4 py-10">
				<iframe
					className={'overflow-hidden rounded-lg'}
					frameborder="0"
					allowfullscreen=""
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="Kieslect Calling Watch Ks pro"
					width="640"
					height="360"
					src="https://www.youtube.com/embed/u4AxqUJGK_4?autoplay=1&mute=1&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.kieslect.com&widgetid=1&controls=0"
					id="widget2"
					data-gtm-yt-inspected-6="true"
					style={{ width: '100%', height: '200px' }}
				></iframe>
			</section>

			<section className="bg-[#fefefe] py-8 mb-5">
				<h2 className="text-2xl mb-4 pl-4 text-[#d50e25] font-extrabold tracking-wider font-lato">
					Specifications
				</h2>
				<div
					className="flex flex-wrap justify-center gap-2 p-2 overflow-hidden"
					style={{ height: height }}
				>
					{descrition.map(({ description, icon, title }, index) => (
						<DescriptionCard
							key={index}
							description={description}
							title={title}
							icon={icon}
						/>
					))}
				</div>
				<p className="pl-4 font-semibold text-center mt-5 font-lato">
					And{' '}
					<span
						className="text-accent underline"
						onClick={() =>
							setHeight(height == '540px' ? 'auto' : '540px')
						}
					>
						{' '}
						more
					</span>{' '}
					unique features!!
				</p>
			</section>
			<section>
				<section className="my-14">
					<div className='bg-[url("//www.kieslect.com/wp-content/uploads/2023/11/Kieslect-Watch-Ks2-1-En3013.png")] h-[200px]  bg-contain bg-no-repeat' />
					<h2 className="font-lato text-center font-semibold mt-2">
						An easy way to live a Healthier Life!
					</h2>
					<span className="tracking-wider  rounded-md mt-2 w-max text-xs mx-auto block py-1 px-2 bg-opacity-10 bg-accent font-lato font-semibold ">
						24/7 health monitoring
					</span>
				</section>
				<Scrollable
					title={data.scrollableArea.title}
					onTitleClick="/products"
					cardsList={products}
				/>
			</section>

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
								className="text-center block text-white text-xl"
							>
								{icon}
							</a>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Home;

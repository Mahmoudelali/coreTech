import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';
import { GiCheckMark } from 'react-icons/gi';
import Tag from '../../components/tag';
import FeaturesMenu from '../../components/featuresMenu';
import { calculateSave } from '../../helpers.js';

import { IoChevronBackOutline } from 'react-icons/io5';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Product = () => {
	const params = useParams();
	const product = data.products.find((prod) => prod.id == params.id);
	const [displayedImage, setDisplayedImage] = useState(
		product.imagesList ? product.imagesList[0] : product.image,
	);

	const handleForwardImage = () => {
		var curr = product.imagesList.indexOf(displayedImage);

		const list = product.imagesList;

		if (curr == list.length - 1 || curr < 0) {
			setDisplayedImage(list[0]);
		} else {
			setDisplayedImage(list[curr + 1]);
		}
	};
	const handleBackwardImage = () => {
		const curr = product.imagesList.indexOf(displayedImage);
		const list = product.imagesList;
		if (curr == 0) {
			setDisplayedImage(list[list.length - 1]);
		} else {
			setDisplayedImage(list[curr - 1]);
		}
	};

	return (
		<div className="min-h-screen pt-[80px] px-4 pb-10">
			<span className="tracking-wider  rounded-md mt-2 w-max text-xs block py-1 px-2 bg-opacity-10 bg-[#25d366] font-lato font-bold mb-2">
				About the product
			</span>

			<h2 className="text-2xl font-lato font-semibold  tracking-wider mb-5 pl-1 first-letter:text-accent first-letter:text-3xl">
				{product.title}
			</h2>
			<div className="flex justify-between items-center">
				<IoChevronBackOutline size={30} onClick={handleBackwardImage} />
				<img
					src={displayedImage}
					className="max-w-[80%] block mx-auto font-lato tracking-wider first-letter:text-red-500 rounded-lg"
				/>
				<IoChevronForwardOutline
					size={30}
					onClick={handleForwardImage}
				/>
			</div>
			<div className="flex justify-center items-center my-6 gap-4">
				{!product.imagesList ? (
					<></>
				) : (
					product.imagesList.map((img, index) => (
						<div
							key={index}
							className="w-10 h-10 p-1 rounded-md"
							style={{
								border:
									img === displayedImage
										? `.5px solid ${product.accent_color}`
										: '.5px solid gray',
								transform:
									img === displayedImage && 'scale(1.5)',
							}}
							onClick={() => setDisplayedImage(img)}
						>
							<img
								src={img}
								className="max-w-full h-full object-cover"
							/>
						</div>
					))
				)}
			</div>
			{product.top_sale && (
				<Tag
					color={product.accent_color}
					bgColor={product.accent_color}
					title={'#top_selling'}
				/>
			)}

			<div
				className={`mt-4 text-center w-[90%] text-gray-900 font-robotoThin font-extrabold tracking-[3px] my-8`}
			>
				<h2 className="text-left text-4xl mb-1">{product.title}</h2>
				<p className="text-left flex items-center gap-3">
					<span className="text-md text-2xl line-through tracking-wider italic">
						${product.price_before}
					</span>
					<span>-</span>
					<span className="text-md text-2xl text-accent tracking-wider italic">
						${product.price_after}
					</span>
					<span
						className="px-3 py-1  text-[10px] font-lato font-bold  rounded-3xl text-white "
						style={{ backgroundColor: product.accent_color }}
					>
						save{' '}
						{calculateSave(
							product.price_before,
							product.price_after,
						)}
						%
					</span>
				</p>
			</div>
			<h1 className="text-2xl mb-2 text-[#d50e25] font-extrabold tracking-wider font-lato">
				Specifications
			</h1>
			<div className="mt-4 mb-4">
				{product.specifications.map((spec, index) => (
					<article
						className="flex items-center gap-3 mb-2"
						key={index}
					>
						<GiCheckMark color="#25d366" className="self-middle" />
						<span className="font-lato font-semibold tracking tracking-wider text-sm">
							{spec}
						</span>
					</article>
				))}
			</div>
			<section className="my-6">
				<h3 className="text-2xl mb-2 text-[#d50e25] font-extrabold tracking-wider font-lato">
					Operating system support
				</h3>
				<div className="flex items-center gap-5">
					{product.os_support.map((os, index) => (
						<div key={index}>
							<p className="text-center font-robotoThin  font-semibold">
								{os.name}
							</p>
							<p className="text-center text-3xl flex justify-center">
								{os.icon}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="my-6">
				<h3 className="text-2xl mb-2 text-[#d50e25] font-extrabold tracking-wider font-lato">
					Available colors
				</h3>
				{product.colors.map((clr, index) => (
					<span
						key={index}
						className="h-6 w-6 inline-block rounded-full mr-2"
						style={{ backgroundColor: clr }}
					/>
				))}
			</section>
			<section>
				{product.specsList && <img src={product.specsList} />}
			</section>
		</div>
	);
};

export default Product;

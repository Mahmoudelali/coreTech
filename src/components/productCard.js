import React from 'react';
import { Link } from 'react-router-dom';
import { heroImage } from '../assets/images/heroImage.png';
import Tag from './tag';

const ProductCard = ({
	name,
	description,
	image,
	price,
	accent_color,
	id,
	top_sale,
	whatsappMessage,
}) => {
	return (
		<Link className="block" to={`/products/${id}`}>
			<div className="w-full h-[450px] mx-auto  pt-10 shadow-lg  flex flex-col bg-white my-6">
				<div
					className="w-[80%]  h-[120px] mx-auto relative flex justify-center rounded-lg mb-7 bg-opacity-50 "
					style={{ backgroundColor: `${accent_color}30` }}
				>
					<img
						src={image}
						className="absolute left-1/2 -translate-x-1/2 -translate-y-[15px] max-w-[80%]  h-[150px] rounded-xl shadow-xl"
					/>
					<span
						className="w-2 h-2 inline-block absolute bottom-2 left-2 rounded-[50%] "
						style={{
							backgroundColor: accent_color,
						}}
					/>
				</div>

				<p className="mt-7 text-center px-8 ">
					<span className="block text-2xl mb-2 tracking-wide uppercase font-semibold font-lato first-letter:text-accent first-letter:text-3xl">
						{name}
					</span>
					<span className="block tracking-tight mb-2 font-robotoThin text-sm">
						{description}
					</span>
					<div className="mt-2">
						{top_sale && (
							<Tag
								bgColor={accent_color}
								title="#top_sale"
								color={accent_color}
							/>
						)}
					</div>
					<span
						className="block font-semibold text-lg font-lato py-3 "
						style={{ color: accent_color }}
					>
						${price}
					</span>
				</p>

				<button
					onClick={() =>
						(window.location.href = `https://wa.me/96181448272?text=${whatsappMessage}`)
					}
					className=" block mt-auto py-3 text-center font-semibold tracking-wider text-white"
					style={{ backgroundColor: accent_color }}
				>
					Buy Now!
				</button>
			</div>
		</Link>
	);
};

export default ProductCard;

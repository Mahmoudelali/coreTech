import React from 'react';
import { data } from '../../data';
import ProductCard from '../../components/productCard';

const Products = () => {
	const products = data.products;

	return (
		<div className="pt-[64px]">
			<div className='relative h-[200px] bg-[url("https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/kieslect-smartwatch-3-1.jpg?fit=2408%2C912&ssl=1")] bg-cover bg-no-repeat bg-bottom'>
				<div
					className="absolue w-full h-full z-10 flex justify-center items-end "
					style={{ backgroundColor: '#00090' }}
				>
					<h1
						className="relative  text-5xl z-20  tracking-wider mt-2 font-blackops pb-3"
						style={{ color: '#fefefe' }}
					>
						Products
					</h1>
				</div>
			</div>
			<div className="px-6  pt-2 bg-gray-50 pb-24 mb-6">
				{products.map(
					(
						{
							accent_color,
							price_after,
							id,
							image,
							title,
							description,
							top_sale,
						},
						index,
					) => (
						<ProductCard
							top_sale={top_sale}
							key={index}
							id={id}
							name={title}
							price={price_after}
							image={image}
							accent_color={accent_color}
							description={description}
						/>
					),
				)}
			</div>
		</div>
	);
};

export default Products;

import React from 'react';
import { data } from '../../data';
import ContactInfo from '../../components/contactInfo';
import Tag from '../../components/tag';
import LabelInput from '../../components/labelInput';

const Contact = () => {
	return (
		<div className="pt-[100px] px-4 min-h-[60vh]">
			<section className="mb-10">
				<div className="mb-4">
					<Tag
						title="contact section"
						bgColor={'#d50e25'}
						color="#d50e25"
					/>
				</div>
				<h1 className="text-2xl mb-1 pl-4 text-[#d50e25] font-extrabold tracking-wider font-lato">
					Feel free to contact us!
				</h1>
				<p className="mb-4 pl-4  font-semibold tracking-wide font-lato text-sm">
					We will be happy to hear from you
				</p>
				<div className=" mt-5">
					{data.contactView.map(
						({ description, icon, title }, index) => (
							<ContactInfo
								content={description}
								icon={icon}
								key={index}
								title={title}
							/>
						),
					)}
				</div>
			</section>
			<section className="mb-10">
				<h1 className="text-2xl mb-2 pl-4 text-[#d50e25] font-extrabold tracking-wider font-lato">
					Feel free to contact us!
				</h1>
				<div className="flex justify-between px-4">
					<div className="w-[48%]">
						<LabelInput placeholder="First Name" />
					</div>
					<div className="w-[48%]">
						<LabelInput placeholder="Last Name" />
					</div>
				</div>
				<div className="px-4">
					<LabelInput placeholder="Subject" />
				</div>
				<div className="px-4 mt-2">
					<textarea
						className="p-2 w-full min-h-[100px] border-b border-gray-300 block  placeholder:text-sm placeholder:ml-1 leading-8 text-sm"
						placeholder="Your message here..."
					/>
				</div>
			</section>
			
		</div>
	);
};

export default Contact;

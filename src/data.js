import { IoIosBluetooth } from 'react-icons/io';
import { IoIosWifi } from 'react-icons/io';
import { IoCameraOutline } from 'react-icons/io5';
import { IoFlashlightOutline } from 'react-icons/io5';

import { IoHeartOutline } from 'react-icons/io5';
import { IoHardwareChipOutline } from 'react-icons/io5';
import { TbPlayerPlay } from 'react-icons/tb';
import { PiPersonSimpleRun } from 'react-icons/pi';
import { RxSpeakerLoud } from 'react-icons/rx';

//home
import { FiShare2 } from 'react-icons/fi';

import { IoBagOutline } from 'react-icons/io5'; //outlined
import { IoBag } from 'react-icons/io5'; //filled

import { IoHomeOutline } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';

import { IoCall } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';

//socials
import { FaTiktok } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { IoLogoTwitter, IoLogoApple, IoLogoAndroid } from 'react-icons/io5';
import { FaShareAlt } from 'react-icons/fa';

import { FaEnvelope, FaPhoneFlip, FaLocationDot } from 'react-icons/fa6';
import { RiCustomerService2Fill } from 'react-icons/ri';

import heroImage from './assets/images/lauraPoster.jpg';
import heroSecondary from './assets/images/lauraSecondary.jpg';

//lora
import lora1 from './assets/images/lora/1.jpg';
import lora2 from './assets/images/lora/2.jpg';
import lora3 from './assets/images/lora/3.jpg';
import lora4 from './assets/images/lora/4.jpg';
import lora5 from './assets/images/lora/5.jpg';
import lora6 from './assets/images/lora/6.jpg';
import lora_specs from './assets/images/specs.jpeg';

//kr2
import kr2_1 from './assets/images/KR2/1.webp';
import kr2_2 from './assets/images/KR2/2.webp';
import kr2_3 from './assets/images/KR2/3.webp';
import kr2_4 from './assets/images/KR2/4.webp';
import kr2_5 from './assets/images/KR2/5.webp';
import kr2_6 from './assets/images/KR2/6.jpg';
import kr2_specs from './assets/images/KR2/specs.jpeg';

//ks2
import ks2_1 from './assets/images/ks2/1.webp';
import ks2_2 from './assets/images/ks2/2.webp';
import ks2_3 from './assets/images/ks2/3.webp';
import ks2_4 from './assets/images/ks2/4.webp';
import ks2_5 from './assets/images/ks2/5.webp';
import ks2_6 from './assets/images/ks2/6.webp';
import ks2_specs from './assets/images/ks2/specs.jpeg';

//ksmini
import ksMini_1 from './assets/images/KSmini/KSMINI_3.jpg';
import ksMini_2 from './assets/images/KSmini/KSMINI_4.jpg';
import ksMini_3 from './assets/images/KSmini/KSMINI_5.jpg';
import ksMini_4 from './assets/images/KSmini/KSMINI_6.jpg';
import ksMini_5 from './assets/images/KSmini/KSMINI_7.jpg';
import ksMini_6 from './assets/images/KSmini/ks-mini.jpg';
import ksmini_specs from './assets/images/KSmini/specs.jpeg';

//krPro
import krPro_1 from './assets/images/KrPro/1.jpg';
import krPro_2 from './assets/images/KrPro/2.jpg';
import krPro_3 from './assets/images/KrPro/3.jpg';
import krPro_4 from './assets/images/KrPro/4.jpg';
import krPro_5 from './assets/images/KrPro/5.jpg';
import krPro_specs from './assets/images/kspro/specs.jpeg';

//ksPro
import ksPro_1 from './assets/images/kspro/1.jpg';
import ksPro_2 from './assets/images/kspro/2.jpg';
import ksPro_3 from './assets/images/kspro/3.jpg';
import ksPro_4 from './assets/images/kspro/4.jpg';
import ksPro_5 from './assets/images/kspro/5.jpg';
import ksPro_6 from './assets/images/kspro/6.jpg';
import ksPro_specs from './assets/images/kspro/specs.jpeg';

export const data = {
	linksArray: [
		{
			to: '/',
			text: 'home',
			outline_icon: <IoHomeOutline />,
			filled_icon: <IoHome />,
		},
		{
			to: '/products',
			text: 'Products',
			outline_icon: <IoBagOutline />,
			filled_icon: <IoBag />,
		},
		{
			to: '/contact-us',
			text: 'Contact',
			outline_icon: <IoCallOutline />,
			filled_icon: <IoCall />,
		},
	],
	title: 'Core Tech',
	heroSection: {
		imagePrimary: heroImage,
		imageSecondary: heroSecondary,
		title: 'Technology made with trust!',
		content:
			'Be smart with the innovative smartwatches from CoreTech launching Today! ',
	},
	secondarySection: {
		title: 'Enjoy a fashionable and Luxury design with Lora 2 smart watch',
		content: `The affordable luxury watch comes with a premium slim and unfading aluminum alloy frame integrated into the sleek body. Polished to a shiny, mirror-like finish, the ultra-thin lightweight yet sturdy frame embodies high fashion, durability and ele-
		gance, providing strong protection against shock and impact while enhancing
		your most stylish & fashionable outfits`,
	},
	posterImage:
		'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/kieslect-smartwatch-3-1.jpg?fit=2408%2C912&ssl=1',

	descriptions: [
		{
			title: 'BlueTooth',
			icon: <IoIosBluetooth />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'HR Monitor',
			icon: <IoHeartOutline />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Voice assistant',
			icon: <RxSpeakerLoud />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Free built-in player',
			icon: <TbPlayerPlay />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Step count',
			icon: <PiPersonSimpleRun />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},

		{
			title: 'Wifi',
			icon: <IoIosWifi />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Dual Core',
			icon: <IoHardwareChipOutline />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},

		{
			title: 'Camera',
			icon: <IoCameraOutline />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Flashlight',
			icon: <IoFlashlightOutline />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
		{
			title: 'Whatsapp Call',
			icon: <IoIosBluetooth />,
			description: 'lorem ipsom dolor sit amet dolor sit amet',
		},
	],

	products: [
		{
			id: 'Kieslect-Ks2',
			title: 'Kieslect Ks2',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/11/ks2-smartwatch.jpg?fit=1000%2C871&ssl=1',
			imagesList: [ks2_1, ks2_2, ks2_3, ks2_4, ks2_5, ks2_6],
			specsList: ks2_specs,
			price_before: 20,
			price_after: 15,
			accent_color: '#f44336',
			top_sale: false,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			features: [{ title: '', featureList: [''] }],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
		{
			id: 'Kieslect-Kr2',
			title: 'Kieslect Kr2',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/10/kieslect-kr2web_.jpg?fit=1000%2C871&ssl=1',
			specsList: kr2_specs,
			price_before: 20,
			price_after: 15,
			accent_color: '#2596be',
			top_sale: true,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			imagesList: [kr2_1, kr2_2, kr2_3, kr2_4, kr2_5, kr2_6],
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
		{
			id: 'Kieslect-Ks-Pro',
			title: 'Kieslect Ks Pro',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/8.jpg?fit=1000%2C871&ssl=1',
			specsList: ksPro_specs,
			imagesList: [ksPro_1, ksPro_2, ksPro_3, ksPro_4, ksPro_5, ksPro_6],
			price_before: 20,
			price_after: 15,
			accent_color: '#ffb42e',
			top_sale: true,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
		{
			id: 'Kieslect Lora2',
			title: 'Kieslect Lora2',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/kieslect-lora-2-smartwatch.jpg?fit=1000%2C871&ssl=1',
			specsList: lora_specs,
			price_before: 20,
			price_after: 15,

			accent_color: '#800080',
			top_sale: false,
			imagesList: [lora2, lora3, lora4, lora5, lora6, lora1],
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
		{
			id: 'Kieslect-Ks-Mini',
			title: 'Kieslect Ks Mini',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/08/kieslect-ks-mini-smartwatch.jpg?fit=1000%2C871&ssl=1',
			imagesList: [
				ksMini_1,
				ksMini_2,
				ksMini_3,
				ksMini_4,
				ksMini_5,
				ksMini_6,
			],
			specsList: ksmini_specs,
			price_before: 20,
			price_after: 15,
			accent_color: '#00c851',
			top_sale: true,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
		{
			id: 'Kieslect-Kr-Pro',
			title: 'Kieslect Kr Pro',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/08/kieslect-ks-mini-smartwatch.jpg?fit=1000%2C871&ssl=1',
			imagesList: [krPro_2, krPro_1, krPro_3, krPro_4, krPro_5],
			specsList: krPro_specs,
			price_before: 20,
			price_after: 15,
			accent_color: '#637aa4',
			top_sale: true,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugiat optio! Veritatis impedit iusto ea temporibus? Dolore sint at modi!',
			specifications: [
				'Voice assistant',
				'Music player',
				'Heart rate monitor',
				'Breath training',
				'Calories count',
				'Step count',
				'Customized dial',
				'60 sport mode',
			],
			colors: ['black', 'blue'],
			screen: '',
			battery: '',
			battery_life: '',
			support_wpcall: true,
			os_support: [
				{ name: 'IOS', icon: <IoLogoApple color="#000" /> },
				{ name: 'Android', icon: <IoLogoAndroid color="#79c257" /> },
			],
		},
	],
	productScreen: {},
	scrollableArea: {
		title: 'Lots of excellent and high quality products are waiting for you!',
		subtitle: 'Our Products',
	},

	contactView: [
		// FaEnvelope, FaPhoneFlip, FaLocationDot
		{
			title: 'location',
			icon: <FaLocationDot />,
			description: 'lorem ipsum lorem ipsum lorem ',
		},
		{
			title: 'Email',
			icon: <FaEnvelope />,
			description: 'lorem ipsum lorem ipsum lorem ',
		},
		{
			title: 'Call us on',
			icon: <RiCustomerService2Fill />,
			description: '+961 76466 638',
		},
	],
	sideLinks: [
		{
			name: 'facebook',
			url: '',
			icon: <IoLogoFacebook />,
			bgcolor: '#4267b3',
		},
		{
			name: 'instagram',
			url: '',
			icon: <FaInstagram />,
			bgcolor: '#dd2a7b',
		},
		{
			name: 'tiktok',
			url: '',
			icon: <FaTiktok />,
			bgcolor: '#000',
		},
		{
			name: 'Whatsapp',
			url: '',
			icon: <IoLogoWhatsapp />,
			bgcolor: '#25d366',
		},
		{
			name: 'Share',
			url: '',
			icon: <FiShare2 />,
			bgcolor: '#48494B',
		},
	],
};

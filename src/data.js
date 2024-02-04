import Swal from 'sweetalert2';

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
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

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
			icon: <IoLogoWhatsapp />,
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
			price_before: 83,
			price_after: 70,
			accent_color: '#f44336',
			top_sale: false,
			description:
				'Featuring a vibrant 2.01" FHD AMOLED display, a powerful dual-core processor with triple-speed capabilities, and a cutting-edge 2.5D GPU for a super dynamic visual experience',
			specifications: [
				'2.01" FHD AMOLED Display',
				'Dual Core, Triple Speed',
				'2.5D GPU Super Dynamic Display',
				'Advanced Biometric Sensor',
				'24/7 Health Management',
				'Test 3 Health Metrics in 1 Tap',
				'100+ Sports Modes',
				'Smart Sports Recognition',
				'3ATM Waterproof',
				'Music Playback & Control',
				'Always-On Display',
				'Editable Dynamic Watch Faces',
			],
			features: [{ title: '', featureList: [''] }],
			colors: ['blue'],
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
			price_before: 90,
			price_after: 75,
			accent_color: '#2596be',
			top_sale: true,
			description:
				'Equipped with a crisp 1.43" FHD AMOLED display, a high-performance dual-core processor with triple-speed capability, and enhanced security through an advanced biometric sensor.',
			imagesList: [kr2_1, kr2_2, kr2_3, kr2_4, kr2_5, kr2_6],
			specifications: [
				'Dual Core, Triple Speed',
				'2.5D GPU Super Dynamic Display',
				'Advanced Biometric Sensor',
				'24/7 Health Management',
				'The Easy Way to Live a Healthier Life',
				'Comprehensive Sports & Health Data',
				'One Step Pairing and Calls',
				'Music Playback & Control',
				'1.43" FHD AMOLED Display with AOD',
				'Editable Dynamic Watch Faces',
			],
			colors: ['gold', '#02ccfe'],
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
			price_before: 72,
			price_after: 65,
			accent_color: '#ffb42e',
			top_sale: true,
			description:
				'Featuring a spacious 2.01" super-large AMOLED screen, powered by the efficient Kieslect OS, and equipped with an advanced abnormal heart rate alert for enhanced health monitoring.',
			specifications: [
				'2.01" Super Large Amoled Display',
				'Powered by Kieslect OS',
				'Abnormal Heart Rate Alert',
				'100 Sports Modes & IP68 Waterproof',
				'Stable & Clear BT5.2 Calling',
				'Live Smart with AI Voice Assistant',
				'Built-in Games',
				'Convenient Split Screen',
				'Efficient Message Reply',
				'Find My Phone/Watch',
				'Smart Notification',
			],
			colors: ['gold', 'orange'],
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
			id: 'Kieslect-Lora-2',
			title: 'Kieslect Lora2',
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/kieslect-lora-2-smartwatch.jpg?fit=1000%2C871&ssl=1',
			specsList: lora_specs,
			price_before: 75,
			price_after: 60,

			accent_color: '#800080',
			top_sale: false,
			imagesList: [lora2, lora3, lora4, lora5, lora6, lora1],
			description: `Boasting a sleek 1.3" ultra AMOLED display, comprehensive 24-hour women's health management features, and seamless and stable Bluetooth calling for an enhanced communication experience`,
			specifications: [
				'Ultra-thin Lightweight',
				'Fashion Luxury Design',
				'1.3" AMOLED Display',
				'24H Health Management',
				'Hifi Definition Music Player',
				'For both Android and iOS',
			],
			colors: ['#ffd700', '#800080', '#ffc0cb'],
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
			price_before: 40,
			price_after: 35,
			accent_color: '#00c851',
			top_sale: true,
			description: `Featuring a vibrant 1.78" HD colorful AMOLED display, an advanced abnormal heart rate warning system, and effortlessly accessible 24-hour health management for a seamless and proactive well-being experience.`,
			specifications: [
				'Clear & Stable Bluetooth Calls',
				'Abnormal Heart Rate Warning',
				'1.78" HD Colorful Amoled Display',
				'Easy 24H Health Management',
				'Dynamic UI',
				'For both Android and iOS',
			],
			screen: '',
			colors: ['#000'],
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
			image: 'https://i0.wp.com/www.kieslect.com/wp-content/uploads/2023/06/kieslect-kr-pro-smartwatch.jpg?fit=1000%2C871&amp;ssl=1',
			imagesList: [krPro_2, krPro_1, krPro_3, krPro_4, krPro_5],
			specsList: krPro_specs,
			price_before: 70,
			price_after: 58,
			accent_color: '#637aa4',
			top_sale: true,
			description: `Showcasing a stunning 1.43" ultra FHD AMOLED display with an always-on feature, complemented by a double straps design for a stylish and functional wearable experience.`,
			specifications: [
				'Stable Bluetooth Calls',
				'1.43" Ultra FHD AMOLED Display',
				'Dynamic Always on Display',
				'Delicate Navigation Crown',
				'Magnetic Quick Release Strap',
				'Buy One Free One Strap',
				'Music Player',
				'Fitness Tracker',
				'70 Sports Modes',
				'For both Android and iOS',
			],
			colors: ['#000', 'orange', '#1f2c4d'],
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
			title: 'Location',
			icon: <FaLocationDot />,
			description: 'lorem ipsum lorem ipsum lorem ',
		},

		{
			title: `You're free of charge!`,
			icon: <TbTruckDelivery />,
			description: 'We deliver to all over lebanon..',
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
			url: 'https://www.facebook.com/GatheringOfRight?mibextid=LQQJ4d',
			icon: <IoLogoFacebook />,
			bgcolor: '#4267b3',
		},
		{
			name: 'instagram',
			url: 'https://www.instagram.com/core_tech.lb?igsh=Nmh4dnQyejV0MXEx&utm_source=qr',
			icon: <FaInstagram />,
			bgcolor: '#dd2a7b',
		},
		{
			name: 'tiktok',
			url: 'https://www.tiktok.com/@core.tech.lb',
			icon: <FaTiktok />,
			bgcolor: '#000',
		},
		{
			name: 'Whatsapp',
			url: `https://wa.me/${process.env.REACT_APP_ADMIN_NUMBER}`,
			icon: <IoLogoWhatsapp />,
			bgcolor: '#25d366',
		},
		{
			name: 'Share',
			url: '',
			onClick: () => {
				Swal.fire({
					title: 'CoreTech website URL copied to clipboard!',
					text: 'Share with your friends ❤',
					icon: 'success',
				});
				navigator.clipboard.writeText(process.env.REACT_APP_SERVER_URL);
			},
			icon: <FiShare2 />,
			bgcolor: '#48494B',
		},
	],
};
	
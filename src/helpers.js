import swal from 'sweetalert2';
export const calculateSave = (price_before, price_after) => {
	if (
		typeof price_before !== 'number' ||
		typeof price_after !== 'number' ||
		price_before <= 0 ||
		price_after <= 0
	)
		return 'Invalid input. Please provide valid positive numbers.';

	const savings = price_before - price_after;
	const savingsRate = (savings / price_before) * 100;

	return Math.ceil(savingsRate);
};

export const copyUrlToClipboard = () => {
	navigator.clipboard.writeText(process.env.REACT_APP_SERVER_URL);
	swal.fire({
		title: `Core tech website URL copied to clipboard!`,
		text: 'Share with your friends ❤',
		icon: 'success',
	});
};

export const copyProductUrlToClipboard = (prodId, prodName) => {
	navigator.clipboard.writeText(
		`${process.env.REACT_APP_SERVER_URL}products/${prodId}`,
	);
	swal.fire({
		title: `${prodName} watch URL copied to clipboard!`,
		text: 'Share with your friends ❤',
		icon: 'success',
	});
};

export const orderProduct = (whatsappMessage) => {
	swal.fire({
		position: 'top-start',
		icon: 'success',
		title: 'Redirecting to whatsapp..',
		showConfirmButton: false,
		timer: 1500,
	});
	setTimeout(() => {
		window.location.href = `https://wa.me/${process.env.REACT_APP_ADMIN_NUMBER}?text=${whatsappMessage}`;
	}, 1600);
};

export const whatsappMessage = (productName, productId) => {
	var customMessage = `Hi  , I am interested to order ${productName} Thank you ${productId}`;
	var newText;

	newText = customMessage.replaceAll(' ', '%20');

	return newText;
};

export const handleDescriptionMetaTag = (name) => {
	let descriptionMetaTag = document.getElementsByName('description')[0];
	if (name) return (descriptionMetaTag.content = `check out ${name}`);
};

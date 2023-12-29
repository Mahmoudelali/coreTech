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

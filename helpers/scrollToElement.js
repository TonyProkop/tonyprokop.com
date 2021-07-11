export default (id, fallbackUrl) => {
	const element = document.getElementById(id);

	if (!element) {
		window.location.href = fallbackUrl;
		return;
	}

	const rect = element.getBoundingClientRect();
	window.scrollTo({
		top: rect.top,
		left: 0,
		behavior: 'smooth'
	});
};
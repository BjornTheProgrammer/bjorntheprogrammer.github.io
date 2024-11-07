const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animatedContent = entry.target;

		if (entry.isIntersecting) {
			animatedContent.classList.add('fade-in');
		return; // if we added the class, exit the function
		}
	});
});

document.querySelectorAll('.into-content').forEach(item => {
	observer.observe(item);
})

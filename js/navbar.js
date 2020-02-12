$('.bar_hamburger').on('click', function() {
	$('.bar_menu').toggleClass('show');
});
$('.bar_wrap').on('click', function() {
	$('.bar_menu').removeClass('show');
});

(function() {
	const chooseBtn = document.querySelectorAll('.bar_wrap');
	chooseBtn.forEach(function(btn) {
	  btn.addEventListener('click', function(event){
		event.preventDefault();
		const value = event.target.dataset.filter;
		const items = document.querySelectorAll('.section');
  
		items.forEach(function(item) {
			if (item.classList.contains(value)) {
			  item.style.display = 'block';
			} else {
			  item.style.display = 'none';
			}
		});
	  });
	});
})();
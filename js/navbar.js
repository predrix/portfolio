$('.ham').on('click', function() {
	$('.menu').toggleClass('show');
});
$('.wrap').on('click', function() {
	$('.menu').removeClass('show');
});

  (function() {
	const chooseBtn = document.querySelectorAll('.wrap');
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
var burgers = document.querySelectorAll('.burger-menu');
burgers.forEach(el => el.addEventListener('click', e => burgers.forEach(el => el.classList.toggle("active"))));
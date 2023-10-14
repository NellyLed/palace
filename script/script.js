document.getElementById('nav').onmouseover = function(event) { /*находим мышь внутри блока*/
		var target = event.target; /*target укзывает на место клика*/
		if (target.className == 'menu-item') {  /*если место клика блок с классом menu-item*/
		var s = target.getElementsByClassName('submenu');  /*данные под названием класса submenu*/
		closeMenu();/*закрыть меню*/
		s[0].style.display='block';} /*массив с 1 элементом с вложенным меню*/
}
/*проверка курсора мыши на нахождение в menu-item*/
document.onmouseover = function(event) {
		var target = event.target;
		console.log(event.target);
		if(target.className!='menu-item' && target.className!='submenu'){ /*если мышь не на menu-item, то закрыть submenu*/
		closeMenu(); }
}
/*скрыть все открытые подменю и отобразить текущее*/
function closeMenu() { 
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i=0;i<subm.length;i++) {  /*получить элементы submenu*/
	subm[i].style.display="none";}  /*все элементы submenu nav получают этот стиль*/
}
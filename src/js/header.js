import $ from 'jquery';

//Fija el valor del select del buscador de la cabecera.
$('.search-panel .dropdown-menu').find('a').click(function (e) {
	e.preventDefault();
	var param = $(this).attr("href").replace("#", "");
	var concept = $(this).text();
	$('.search-panel span#search_concept').text(concept);
	$('.input-group #search_param').val(param);
});
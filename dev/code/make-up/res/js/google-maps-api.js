// AIzaSyAcyN4qa_J26LI8lmGqLty2QhGp0xoweTg

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(55.7515, 37.6090),
		zoom: 13,
		scrollwheel: false,
		scaleControl: true,
		overviewMapControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var contentString = '<div id="content">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h2 id="firstHeading" class="firstHeading">Tevex</h2>'+
	    '<div id="bodyContent">'+
	    '<p>Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.</p>'+
	    '<p>Адрес: ул. Рыбная, д.14, стр.88</p>'+
	    '<p>Часы работы: ежедневно с 8:00 до 19:00</p>'+
	    '<p>Attribution: Tevex, <a href="http://tevex.ru/">'+
	    'http://tevex.ru/</a></p>'+
	    '</div>'+
	    '</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var image = 'res/img/marker.png';
	var myLatLng = new google.maps.LatLng(55.7435, 37.5870);
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image,
		title:"Hello World!"
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

$(document).ready(function() {
	initialize();
})
$(function(){
	$('.map').mobilymap({
		position: 'center',
		popupClass: 'bubble',
		markerClass: 'point',
		popup: true,
		cookies: false,
		caption: false,
		setCenter: true,
		outsideButtons: '.map_buttons a',
		onMarkerClick: function(){},
		onPopupClose: function(){},
		onMapLoad: function(){}
	});
});

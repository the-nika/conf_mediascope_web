function init() {
    var a = new ymaps.Map("map", {
        center: [55.695226,37.390959],//[55.697226,37.390959],
        zoom: 15,
        //controls: []
        controls: ["zoomControl"],
        behaviors: ["drag"]
    });
    //a.behaviors.disable("scrollZoom"), jQuery(window).width() < 480 && a.behaviors.disable("drag");
    //a.controls.add('zoomControl', { position: {top: 175, left: 5 }});
    var placemark = new ymaps.Placemark([55.695226,37.390959], {
    	hintContent: 'Кампус бизнес-школы СКОЛКОВО',
    	balloonContent: '<p><strong>Кампус бизнес-школы СКОЛКОВО</strong></p><p>Россия, 143025, Московская область, Одинцовский район, дер. Сколково, ул. Новая, д.100</p>'
    });
    a.geoObjects.add(placemark);

    /*var markerSizeX = 118,
    	markerSizeY = 102,
        opt = {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [markerSizeX,markerSizeY],
            iconImageOffset: [-markerSizeX/2, -markerSizeY],
        };
    window.myObjects = ymaps.geoQuery({
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [55.695226,37.390959]
            },
            properties: {
                name: "merker",
                hintContent: "Московская школа управления Сколково"
            },
            options: opt
        }]
    }).addToMap(a);*/
}
ymaps.ready(init);
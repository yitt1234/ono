let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.23447, lng: 128.234089756203948752039487502983475029568092348750293487502934857029384750293847509238760293845760293487520934875029348750293847 },
        zoom: 7,
    });
}

window.initMap = initMap;
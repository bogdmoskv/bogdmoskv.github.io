const map = L.map('map').setView([50.451646256017916, 30.412360596056462], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

L.marker([50.451646256017916, 30.412360596056462]).addTo(map)
    .bindPopup('AS-Trans<br>Київ, вул. Радищева, 3 офіс Б-306, а/с 25')  
var map = L.map('map').setView([37.88450, -4.77956], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.88450, -4.77956]).addTo(map)
    .bindPopup('Plaza de las Tendillas')
    .openPopup();

// L.marker([37.88450, -4.77956]).addTo(map)
//     .bindPopup('La once')
//     .openPopup();   

// L.marker([37.88450, -4.77956]).addTo(map)
//     .bindPopup('Alcohólicos Anónimos')
//     .openPopup();  

// L.marker([37.88450, -4.77956]).addTo(map)
//     .bindPopup('Bomberos')
//     .openPopup();  
    
// L.marker([37.88450, -4.77956]).addTo(map)
//     .bindPopup('Cementerio')
//     .openPopup();      

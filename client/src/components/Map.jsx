import React from 'react';

class Map extends React.Component {
  initMap = () => {
    const uluru = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map,
    });
  }

  render = () => (
      <div>Meow</div>
    )
}

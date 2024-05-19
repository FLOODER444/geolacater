const locationInfo = document.getElementById('location-info');
const googleMapsLink = document.getElementById('google-maps-link');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;

    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(response => response.json())
      .then(data => {
        const city = data.city;
        const region = data.region_name;
        const country = data.country_name;
        const latitude = data.latitude;
        const longitude = data.longitude;

        locationInfo.textContent = `You are located in ${city}, ${region}, ${country}.`;
        googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
        locationInfo.textContent = 'Error fetching location data.';
      });
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
    locationInfo.textContent = 'Error fetching IP address.';
  });

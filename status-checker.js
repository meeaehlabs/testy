document.addEventListener('DOMContentLoaded', () => {
  const statusMessage = document.getElementById('statusMessage');
  const serviceUrl = 'http://10.60.61.10:90/get_code'; // Update this URL as needed

  fetch(serviceUrl)
    .then(response => {
      switch (response.status) {
        case 200:
          statusMessage.textContent = 'Hello world, all is good';
          break;
        case 201:
          statusMessage.textContent = 'Hello world, most is good';
          break;
        case 300:
          statusMessage.textContent = 'Hello world, maybe pay for the site';
          break;
        case 500:
          statusMessage.textContent = 'Site files deleted due to non-payment';
          break;
        default:
          statusMessage.textContent = `Unexpected status: ${response.status}`;
      }
    })
    .catch(error => {
      console.error('Error fetching status:', error);
      statusMessage.textContent = 'Error checking status';
    });
});

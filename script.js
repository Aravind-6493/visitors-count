// Check if the 'visitorCount' key exists in localStorage
if (localStorage.getItem('visitorCount') === null) {
    // If not, set it to 1
    localStorage.setItem('visitorCount', 1);
  } else {
    // If yes, increment its value by 1
    let count = parseInt(localStorage.getItem('visitorCount'));
    count++;
    localStorage.setItem('visitorCount', count);
  }
  
  // Update the visitor count displayed on the webpage
  document.getElementById('visitorCount').textContent = localStorage.getItem('visitorCount');
  
  // Function to detect device type
  function detectDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Laptop';
  }
  
  // Function to get current time
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString();
  }
  
  // Function to update the device table
  function updateDeviceTable(device, time) {
    const tableBody = document.querySelector('#deviceTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${device}</td><td>${time}</td>`;
  }
  
  // Function to store visit information in localStorage
  function storeVisitInfo(device, time) {
    let visits = JSON.parse(localStorage.getItem('visits')) || [];
    visits.push({ device, time });
    localStorage.setItem('visits', JSON.stringify(visits));
  }
  
  // Function to display all visit information
  function displayVisits() {
    const visits = JSON.parse(localStorage.getItem('visits')) || [];
    visits.forEach(visit => {
      updateDeviceTable(visit.device, visit.time);
    });
  }
  
  // Call the functions to update device table and store visit information
  const deviceType = detectDevice();
  const visitTime = getCurrentTime();
  updateDeviceTable(deviceType, visitTime);
  storeVisitInfo(deviceType, visitTime);
  
  // Display all visit information
  displayVisits();
  
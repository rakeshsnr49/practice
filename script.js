async function getData() {
  const output = document.getElementById('output');
  output.innerText = 'Loading...';

  try {
    const response = await fetch('https://my-backend-service.onrender.com/api/data');
    const data = await response.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = 'Error fetching data: ' + err.message;
  }
}

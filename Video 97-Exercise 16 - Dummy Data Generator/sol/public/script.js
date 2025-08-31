document.getElementById('generateBtn').addEventListener('click', () => {
      fetch('/generate-data', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => {
        // alert(data.message);
      })
      .catch(err => {
        // alert("Error: " + err);
      });
    });


document.getElementById('deleteBtn').addEventListener('click', () => {
      fetch('/delete-data', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => {
        // alert(data.message);
      })
      .catch(err => {
        // alert("Error: " + err);
      });
    });

document.getElementById('ShowDataBtn').addEventListener('click', () => {
  fetch('/show-data',{
    method:'GET'
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector("span").innerText = data.message;
      console.log("Fetched data:", data);
    })
    .catch(err => {
      console.error("Fetch error:", err);
    });
});








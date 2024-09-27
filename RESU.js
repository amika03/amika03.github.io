function greet() {
    alert("Welcom in Resume");
}
function ady() {
    var image = document.getElementById("hiddenady");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

function pea() {
    var image = document.getElementById("hiddenpea");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

function fetchSensorData() {
    fetch('https://206.189.146.138/api/sensors')
        .then(response => response.json())
        .then(data => {
            document.getElementById('timestamp').innerText = data.timestamp;
            document.getElementById('temperature').innerText = data.temperature;
            document.getElementById('humidity').innerText = data.humidity;
            document.getElementById('luxsensor').innerText = data.luxsensor;
            document.getElementById('motion').innerText = data.motion ? 'True' : 'Fale';
        })
        .catch(error => console.error('Error fetching sensor data:', error));
}


setInterval(fetchSensorData, 1000);


document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    
    const payload = {
        id: studentId,
        name: studentName
    };

    fetch('https://206.189.146.138/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert('Student data submitted successfully');
    })
    .catch(error => console.error('Error submitting student data:', error));
});




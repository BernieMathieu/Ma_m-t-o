  document.getElementById('weather-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const city = document.getElementById('city').value;
            getWeather(city);
            
    
        })

        function getWeather(city) {
            const apiKey = '96dabab0a33f07ae6558804b2120a674'; 
            //  clé API
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => { 
                    console.log((data));
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Erreur :', error);
                });

        }

        function displayWeather(data) {
            
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Température : ${data.main.temp}°C</p>
                <p>Humidité : ${data.main.humidity}%</p>
                <p>Conditions : ${data.weather[0].description}</p>
            `;
            document.getElementById("city").value = "";
            
            if (city === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }
        }
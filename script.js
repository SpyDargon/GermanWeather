let appId = '94e64c7950df419b99c90813241801';
let appUrl = "https://api.weatherapi.com/v1/current.json?key=" + appId;
let weather;

async function updateWeather() {
    let city = document.getElementById("inputField").value;
    const request = new Request(appUrl + "&q=" + city);
    const response = await fetch(request);
    const test = await response.json();
    console.log(test);
    let list = document.getElementById("stadt");
    list.innerText = "City:" + test.location.name + "\n" + "Region:" + test.location.region + "\n" + "Country:" + test.location.country + "\n" + "Local time:" + test.location.localtime + "\n" + "Current temp.:" + test.current.temp_c + "\n" + "Feelslike:" + test.current.feelslike_c + "\n" + "Condtion:" + test.current.condition.text + "\n";
    let img = document.createElement("img");
    img.src = "https:" + test.current.condition.icon;
    list.appendChild(img);
    let weatherCode = test.current.condition.code;
    updateBackgroundColor(weatherCode);
}

function updateBackgroundColor(weatherCode) {
    const body = document.body;

    switch (weatherCode) {
        case 1000: // Clear
            body.style.backgroundColor = '#87CEEB'; // Light Blue for clear sky
            break;
        case 1003: // Partly Cloudy
        case 1006: // Cloudy
        case 1009: // Overcast
            body.style.backgroundColor = '#808080'; // Gray for cloudy
            break;
        case 1063: // Patchy rain nearby
        case 1087: // Thundery outbreaks in nearby
        case 1180: // Patchy light rain
        case 1183: // Patchy light drizzle
        case 1186: // Light drizzle
        case 1189: // Patchy light drizzle
        case 1192: // Light drizzle
        case 1195: // Moderate or heavy rain shower
        case 1198: // Moderate or heavy rain shower
        case 1201: // Moderate or heavy rain with thunder
            body.style.backgroundColor = '#4682B4'; // Steel Blue for rain-related conditions
            break;
        // Add more cases for other weather conditions as needed
        default:
            body.style.backgroundColor = '#f0f0f0'; // Default background color
            break;
    }
}
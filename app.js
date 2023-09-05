const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f091e0516msh19050a9bc51c78ep18e554jsne176b702060c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    let weather = await getWeather(input);
    let h1 = document.querySelector("h1");
    h1.innerText = "Weather Condition for " +input+"...";
    let list = document.querySelector("#list");
    list.innerHTML='';
    show(weather);
    document.querySelector("input").value='';   
});

function show(weather) {
    let list = document.querySelector("#list");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let li8 = document.createElement("li");
    let li9 = document.createElement("li");
    let li10 = document.createElement("li");

    li1.innerText = "Cloud Percentage : "+weather.cloud_pct;
    list.appendChild(li1);
    li2.innerText = "Feels Like : "+weather.feels_like;
    list.appendChild(li2);
    li3.innerText = "Humidity : "+weather.humidity;
    list.appendChild(li3);
    li4.innerText = "Maximum Temperature : "+weather.max_temp;
    list.appendChild(li4);
    li5.innerText = "Minimum Temperature : "+weather.min_temp;
    list.appendChild(li5);
    li6.innerText = "Sunrise : "+weather.sunrise;
    list.appendChild(li6);
    li7.innerText = "Sunset : "+weather.sunset;
    list.appendChild(li7);
    li8.innerText = "Temperature : "+weather.temp;
    list.appendChild(li8);
    li9.innerText = "Wind Degrees : "+weather.wind_degrees;
    list.appendChild(li9);
    li10.innerText = "Wind Speed : "+weather.wind_speed;
    list.appendChild(li10);
}
async function getWeather(city) {
    try {
        let res = await axios.get(url+city,options);
        console.log(res);
        return res.data;
    } catch(err) {
        console.log("Error"+err);
    }
}


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ea45cc19f2mshfc1dabd815c2b3ap1d2a90jsn1f5abb6da4f1',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

const getWeather =(city) =>{
    cityName.innerHTML = city
	lang="EN";
fetch(
  "https://open-weather13.p.rapidapi.com/city/" + city+"/"+lang)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    //cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getWeather("Kolkata")

submit.addEventListener("click", (e)=>
{
    e.preventDefault()
   getWeather(city.value)

})

console.log("Kashif");

async function fetchData() {

    const cityName = document.getElementById("city").value
    const apiKey = "6dcc08e2e874c74474937326159100c8" //add your own api key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
   

    let weather = data.weather[0].main
    let temperature = data.main.temp
    let city = data.name
    let description = data.weather[0].description
    let pressure = data.main.pressure
    let humidity = data.main.humidity
    let visibility = data.visibility

    let weatherIcon = `https://openweathermap.org/img/wn/11n@2x.png`



    document.getElementById("wIcon").src = weatherIcon
    document.getElementById("temp").innerHTML = `${temperature} °C`
    document.getElementById("cityName").innerHTML = city
    document.getElementById("desc").innerHTML = description
    document.getElementById("pressure").innerHTML = pressure
    document.getElementById("humidity").innerHTML = humidity
    document.getElementById("visibility").innerHTML = visibility
    

    console.log(weather);

}
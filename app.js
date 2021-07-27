let userLocation = document.querySelector("#userLocation");
let submit = document.querySelector("#button");
let statusIndicator = document.querySelector("#weatherStatus")

let APIURL = "http://api.weatherapi.com/v1/current.json";
let apiKey = "not the real key";

submit.addEventListener("click", function() {
    fetch(`${APIURL}?key=${apiKey}&q=${userLocation.value}&aqi=no`)
    .then(res => res.json())
    .then((res)=> {
        console.log(res)
        statusIndicator.innerHTML = `${res.current.condition.text} and ${Math.round(res.current.temp_f)} degrees in ${res.location.name}, ${res.location.region}`
    }).catch(e => {
        statusIndicator.innerHTML = `Something went wrong! Re-enter location or test your internet`
        console.log(e)
    })
});

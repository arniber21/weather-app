let userLocation = document.querySelector("#userLocation");
let submit = document.querySelector("#button");
let statusIndicator = document.querySelector("#weatherStatus");
let cardGroup = document.querySelector("#cardContainer");
let alertGroup = document.querySelector("#alertGroup");
let purge = document.querySelector("#purge");

let APIURL = "http://api.weatherapi.com/v1/current.json";
let apiKey = "insert api key here";

const createAlert = () => {
    let newAlert = document.createElement('div');
    newAlert.classList.add("alert");
    newAlert.classList.add("alert-danger");
    newAlert.innerHTML = "Something went wrong - pick a different location or check your internet";
    alertGroup.append(newAlert);
}

const clearAlerts = () => {
    while(alertGroup.firstChild){
        alertGroup.removeChild(alertGroup.firstChild);
    }
}

const createCard = (res) => {
    let newCard = document.createElement('div');
    newCard.classList.add("card");
    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body")
    let cardHeader = document.createElement('h5');
    cardHeader.classList.add("card-title");
    cardHeader.innerText = `${res.location.name}, ${res.location.region}`;
    let cardText = document.createElement('p');
    cardText.classList.add("card-text");
    cardText.innerText = `${res.current.condition.text}, ${Math.round(res.current.temp_f)} degrees`;
    cardBody.append(cardHeader);
    cardBody.append(cardText);
    newCard.append(cardBody);
    cardGroup.append(newCard);
    cardGroup.append(document.createElement('br'));
}


purge.addEventListener("click", function(){
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }
});

submit.addEventListener("click", function() {
    fetch(`${APIURL}?key=${apiKey}&q=${userLocation.value}&aqi=no`)
    .then(res => res.json())
    .then((res)=> {
        console.log(res);
        clearAlerts();
        createCard(res);
    }).catch(e => {
        createAlert();
        console.log(e);
    })
});



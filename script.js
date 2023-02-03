let key = "952ac39ded39d8cd15d1ee7d7cb3e7f1"


function putOnScreen(dice) {
    console.log(dice)
    document.querySelector(".city").innerHTML = "Tempo em " + dice.name
    document.querySelector(".temp").innerHTML = Math.floor(dice.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dice.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dice.weather[0].icon + ".png"
    document.querySelector(".moisture").innerHTML = Math.floor(dice.main.humidity)+"%" + " Umidade " 

    
}

async function seekCity(city) {
    let dice = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        key +
        "&lang=pt_br" +
        "&units=metric"
    ).then(response => response.json())
        

    putOnScreen(dice)
       
}


function clickButton() {
    let city = document.querySelector(".input").value

    seekCity(city)
}
var searchInput=document.getElementById("searchInput");
var findBtn=document.getElementById("findBtn");
var cardContainer= document.querySelector(".card-container")

var x;

async function getWeather(city){
   
   var response= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fbbc392581f24e88b01173850232202&q=${city}&days=3`);
   var result= await response.json();
   display(result)
   
}

getWeather("cairo")  //Default City 

async function search(requiredLocation){
    var response= await fetch(`http://api.weatherapi.com/v1/search.json?key=fbbc392581f24e88b01173850232202&q=${requiredLocation}`);
    var location= await response.json();
    getWeather(location[0].name)
 }


console.log(searchInput.value);

 function fetchingSearch(){
    var result= searchInput.value;

    if(result != "" && result.length>=3){
        search(result)}
    }


 searchInput.addEventListener("input",fetchingSearch )



 function display(data){
    
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var selectedDays=[];
    
    for(var i=0;i<3;i++){
        var d = new Date(data.forecast.forecastday[i].date);
        var dayOrder = d.getDay()
        selectedDays.push(weekday[dayOrder])
    }
    
    const event = new Date(data.forecast.forecastday[0].date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    var month_name= event.toLocaleDateString('en', options)
    



    cardContainer.innerHTML= 
`
<div class="card">
            <div class="card-body">
              <div class="card-date d-flex justify-content-between align-items-center px-4">
                <h5 class="">${selectedDays[0]}</h5>
                <h5>${month_name}</h5>
              </div>
              <div class="card-info">
                <h4 class="m-4">${data.location.name}</h4>
                <div class="degree d-flex justify-content-around align-items-center m-4">
                    <h5>${Math.ceil(data.forecast.forecastday[0].day.maxtemp_c)} °C</h5>
                    <div class="deg-img">
                        <img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="">
                    </div>
                </div>
                <h6 class="m-4">${data.forecast.forecastday[0].day.condition.text}</h6>

                <div class="weather-details d-flex  align-items-center gap-4 m-4">
                    <div class="humditiy d-flex gap-1">
                        <img src="Images/icon-umberella.png" alt="">
                        <p>${data.forecast.forecastday[0].hour[11].humidity} %</p>
                    </div>
                    <div class="wind d-flex gap-1">
                        <img src="Images/icon-wind.png" alt="">
                        <p>${data.forecast.forecastday[0].hour[11].gust_kph} km/h</p>
                    </div>
                    <div class="wind direction d-flex gap-1">
                        <img src="Images/icon-compass.png" alt="" ">
                        <p>${data.forecast.forecastday[0].hour[11].wind_dir}</p>
                    </div>
                </div>

              </div>

            </div>
          </div>



          <div class="card next-day">
            <div class="card-body">
              <div class="card-date  text-center">
                <h5 >${selectedDays[1]}</h5>
              </div>
              <div class="card-info text-center">
                <div class="degree  m-4">
                <div class="deg-img">
                    <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
                </div>
                    <p class="fs-2 text-white">${Math.ceil(data.forecast.forecastday[1].day.maxtemp_c)} °C</p>
                    <p class="fs-5 my-2 text-white-50">${Math.ceil(data.forecast.forecastday[1].day.mintemp_c)} °C</p>
                </div>
                <h6 class="m-4">${data.forecast.forecastday[1].day.condition.text}</h6>

                <div class="weather-details d-flex justify-content-center  align-items-center gap-4 m-4">
                    <div class="humditiy d-flex gap-1">
                        <img src="Images/icon-umberella.png" alt="">
                        <p>${data.forecast.forecastday[1].hour[11].humidity} %</p>
                    </div>
                    <div class="wind d-flex gap-1">
                        <img src="Images/icon-wind.png" alt="">
                        <p>${data.forecast.forecastday[1].hour[11].gust_kph} km/h</p>
                    </div>
                    <div class="wind direction d-flex gap-1">
                        <img src="Images/icon-compass.png" alt="" ">
                        <p>${data.forecast.forecastday[1].hour[11].wind_dir}</p>
                    </div>
                </div>

              </div>

            </div>
          </div>





          <div class="card">
          <div class="card-body">
            <div class="card-date  text-center">
              <h5 >${selectedDays[2]}</h5>
            </div>
            <div class="card-info text-center">
              <div class="degree  m-4">
              <div class="deg-img">
                  <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
              </div>
                  <p class="fs-2 text-white">${Math.ceil(data.forecast.forecastday[2].day.maxtemp_c)} °C</p>
                  <p class="fs-5 my-2 text-white-50">${Math.ceil(data.forecast.forecastday[2].day.mintemp_c)} °C</p>
              </div>
              <h6 class="m-4">${data.forecast.forecastday[2].day.condition.text}</h6>

              <div class="weather-details d-flex justify-content-center  align-items-center gap-4 m-4">
                  <div class="humditiy d-flex gap-1">
                      <img src="Images/icon-umberella.png" alt="">
                      <p>${data.forecast.forecastday[2].hour[11].humidity} %</p>
                  </div>
                  <div class="wind d-flex gap-1">
                      <img src="Images/icon-wind.png" alt="">
                      <p>${data.forecast.forecastday[2].hour[11].gust_kph} km/h</p>
                  </div>
                  <div class="wind direction d-flex gap-1">
                      <img src="Images/icon-compass.png" alt="" ">
                      <p>${data.forecast.forecastday[2].hour[11].wind_dir}</p>
                  </div>
              </div>

            </div>

          </div>
        </div>



`


 }
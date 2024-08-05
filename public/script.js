
const input=document.querySelector('.search input')
const btn=document.querySelector('.search .btn')
const weatherImg=document.querySelector('.weather-img-box .weather-img')
const error1=document.querySelector('.error1 p')
const date1=document.querySelector('.dateAPI')
const time=document.querySelector('.time')
const dayName=document.querySelector('.day')

// console.log(process.pid);

async function getData(cityName){

    let apikey='d990ec01534b9a4c3a65e27a644ea6b3';
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
    let response1=await axios.get(apiUrl)


//     .then((data)=>{

//     let {data}=response1;
//     console.log(data);

   
//     let {temp,humidity}=data.main;
//     let {speed}=data.wind;

//     console.log(temp);
//     console.log(humidity);
//     console.log(speed);

//     document.querySelector('.temp').innerText=Math.floor(data.main.temp)+"°C";
//     document.querySelector('.cityName').innerText=data.name;
//     document.querySelector('.typeNumber').innerText=data.main.humidity+"%";
//     document.querySelector('.windSpeed').innerText=data.wind.speed+"km/h";

//     // if(data.weather.main=='Clouds') document.querySelector('.weather-img')
//      console.log(data.weather[0].main);

//     if(data.weather[0].main=='Clear'){
//         weatherImg.setAttribute('src','img/clear.png')
//     }
//     else if(data.weather[0].main=='Clouds'){
//         weatherImg.setAttribute('src','/img/clouds.png')
//     }
//     else if(data.weather[0].main=='Rain'){
//         weatherImg.setAttribute('src','/img/rain.png')
//     }
//     else if(data.weather[0].main=='Haze'){
//         weatherImg.setAttribute('src','/img/drizzle.png')
//     }
//     else if(data.weather[0].main=='Mist'){
//         weatherImg.setAttribute('src','/img/mist.png')
//     }
//     else if(data.weather[0].main=='Snow'){
//         weatherImg.setAttribute('src','/img/snow.png')
//     }
    
//     document.querySelector('.details').style.display="block";
//     error1.style.display="none";
// })
// .catch((err)=>{
//     console.log(err);
//     document.querySelector('.details').style.display="none";
//     error1.style.display="block";
//     console.log("not found");
//     // console.log(err);

// })


    if(response1.status==404){
        console.log("not found");
        error1.style.display="block";
        document.querySelector('.details').style.display="none";
        
    }
    else {

    let {data}=response1;
    console.log(data);
    

   
    let {temp,humidity}=data.main;
    let {speed}=data.wind;

    console.log(temp);
    console.log(humidity);
    console.log(speed);

    document.querySelector('.temp').innerText=Math.floor(data.main.temp)+"°C";
    document.querySelector('.cityName').innerText=data.name;
    document.querySelector('.typeNumber').innerText=data.main.humidity+"%";
    document.querySelector('.windSpeed').innerText=data.wind.speed+"km/h";
    document.querySelector('.main').innerText=data.weather[0].main;

    const timeStamp = parseInt(data.dt) * 1000;
    const date = new Date(timeStamp);

    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // console.log(day); 
    // console.log(formattedDate); 
    // console.log(formattedTime);

    date1.innerText=formattedDate
    time.innerText=formattedTime
    dayName.innerText=day

    // if(data.weather.main=='Clouds') document.querySelector('.weather-img')
    //  console.log(data.weather[0].main);

    if(data.weather[0].main=='Clear'){
        weatherImg.setAttribute('src','img/clear.png')
    }
    else if(data.weather[0].main=='Clouds'){
        weatherImg.setAttribute('src','/img/clouds.png')
    }
    else if(data.weather[0].main=='Rain'){
        weatherImg.setAttribute('src','/img/rain.png')
    }
    else if(data.weather[0].main=='Haze'){
        weatherImg.setAttribute('src','/img/drizzle.png')
    }
    else if(data.weather[0].main=='Mist'){
        weatherImg.setAttribute('src','/img/mist.png')
    }
    else if(data.weather[0].main=='Snow'){
        weatherImg.setAttribute('src','/img/snow.png')
    }
    
    document.querySelector('.details').style.display="block";
    error1.style.display="none";

    }
}



btn.addEventListener('click',()=>{
    if(input.value!='') getData(input.value);
    input.value="";
})


// const input = document.querySelector('.search input');
// const btn = document.querySelector('.search .btn');
// const weatherImg = document.querySelector('.weather-img-box .weather-img');
// const error1 = document.querySelector('.error1 p');
// const body=document.querySelector('body');

// async function getData(cityName) {
//     try {
//         const apiKey = 'd990ec01534b9a4c3a65e27a644ea6b3';
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//         const response = await axios.get(apiUrl);
//         const data = response.data;

//         // if (response.status !== 200) {
//         //     throw new Error('City not found');
//         // }

//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;

//         document.querySelector('.temp').innerText = Math.round(temp) + "°C";
//         document.querySelector('.cityName').innerText = data.name;
//         document.querySelector('.typeNumber').innerText = humidity + "%";
//         document.querySelector('.windSpeed').innerText = speed + "km/h";

//         switch (data.weather[0].main) {
//             case 'Clear':
//                 weatherImg.setAttribute('src', 'img/clear.png');
//                 break;
//             case 'Clouds':
//                 weatherImg.setAttribute('src', '/img/clouds.png');
//                 break;
//             case 'Rain':
//                 weatherImg.setAttribute('src', '/img/rain.png');
//                 break;
//             case 'Haze':
//                 weatherImg.setAttribute('src', '/img/drizzle.png');
//                 break;
//             case 'Mist':
//                 weatherImg.setAttribute('src', '/img/mist.png');
//                 break;
//             case 'Snow':
//                 weatherImg.setAttribute('src', '/img/snow.png');
//                 break;
//             default:
//                 weatherImg.setAttribute('src', ''); // Set a default image or leave it empty
//         }

//         document.querySelector('.details').style.display = "block";
//         error.style.display = "none";
//     } catch (error) {
//         // console.error("An error occurred:");
        
//         // // let li=document.createElement('h1')
//         // error1.classList.add('error1')
//         // error1.innerText="City not found"
//         // // console.log(li);
//         // // body.appendChild();
//         // console.log(error1);
//         error1.style.display="block";
//         document.querySelector('.details').style.display="none";
       
        
//         // console.log("City not found");
//         // document.querySelector('.details').style.display = "none";
//     }
// }

// btn.addEventListener('click', () => {
//     if (input.value !== '') getData(input.value);
//     input.value = "";
// });


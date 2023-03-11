import './App.css';
import axios from 'axios';
import WeatherService from "./weatherComponent";
import TodayWeather from './todayWeather';
import React, { useState, useEffect } from 'react';

function App() {

  let baseURL = "https://api.open-meteo.com/v1/forecast?latitude=44.43&longitude=26.11&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,snowfall,cloudcover,visibility,windspeed_10m,winddirection_10m&current_weather=true&start_date=2023-03-06&end_date=2023-03-06";

  let baseURLAir = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=44.43&longitude=26.11&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,dust,uv_index,alder_pollen,birch_pollen,grass_pollen&timezone=Europe%2FLondon&start_date=2023-03-05&end_date=2023-03-05";

  // functionWeatherGuage();

  const [postAirQuality, setAirQulity] = useState("");

  const [postWeather, setWeather] = useState("");

  useEffect(() => {
    axios.get(baseURLAir).then(response => setAirQulity(response.data)).catch(error => console.error(error));
  }, [baseURLAir]);

  useEffect(() => {
    axios.get(baseURL).then(
      response => { setWeather(response.data) }
    ).catch(error => { console.error(error); });
  }, [baseURL]);

  if (postAirQuality === "") {
    return;
  }

  if (postWeather === "") {
    return;
  }

  return (
    <div className='homePage'>
      <nav className='navBar'>
        <h1 className='logo'>Atom Things</h1>
        <h2 className='motto'>everything is closer than you think</h2>
      </nav>

      <main className='main-component'>
        <div className='container-card'>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="images/peles.jpg" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                Peles Castle is a 1980s-based community of 10,000,000 people living in the city of Peles.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="https://images.unsplash.com/photo-1475754073691-4423e1368422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="https://images.unsplash.com/photo-1605514038998-108b85ed9cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                Peles Castle is a 1980s-based community of 10,000,000 people living in the city of Peles.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="https://images.unsplash.com/photo-1595318971645-f8f38a5ae5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                Peles Castle is a 1980s-based community of 10,000,000 people living in the city of Peles.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="https://images.unsplash.com/photo-1587973728667-f5338185869c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                Peles Castle is a 1980s-based community of 10,000,000 people living in the city of Peles.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-header'>
              <img className='img-card' src="https://images.unsplash.com/photo-1512988259055-8bb4766bc107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='Peles Castle' width="385px" height="257px" />
              <h1 className='card-title'>Peles Castle</h1>
            </div>
            <div className='card-body'>
              <button type='button' className='btn-more'>Discover more...</button>
              <p className='card-text'>
                Peles Castle is a 1980s-based community of 10,000,000 people living in the city of Peles.
              </p>
            </div>
          </div>

        </div>

        <div className='title-container'>
          <h1 className='weather-title'>Weather Report</h1>
        </div>

        <div className='weather-container'>

          <div className='weather-card'>
            <h2 className='weather-card-title'>HOURLY WEATHER</h2>
            <WeatherService data={postWeather} />
          </div>

          <div className='weather-gauge'>
            <span>-25</span>
            <span>-20</span>
            <span>-15</span>
            <span>-10</span>
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
            <span>35</span>
            <span>40</span>
            <span>45</span>
            <div className='container-indicator' id='containerIndicator'>
              <p className='indicator'></p>
            </div>
            {/* <span>50</span> */}
          </div>

          <div className='weather-card'>
            <h2 className='weather-card-title'>Today WEATHER</h2>
            <TodayWeather data={postAirQuality} dataH={postWeather.hourly} />
          </div>
        </div>
      </main >


      <div className='work'>
        <h2>Work in progress...</h2>
        <i className="fa-solid fa-spinner"></i>
      </div>


      <div className='btn-group'>
        <button type='button' className='btn-home'>HOME</button>
        <button type='button' className='btn-categories'>CATEGORIES ^</button>
        <button type='button' className='btn-about'>ABOUT</button>
      </div>
    </div >
  );


}


export default App;

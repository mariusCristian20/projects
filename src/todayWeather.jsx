

function TodayWeather(airQuality, weatherData){

    let calc = 0;

    for (let i = 0; i < airQuality.data.hourly.pm2_5.length; i++) {
        calc += airQuality.data.hourly.pm2_5[i];
    }

    console.log(calc);
    console.log(calc / 24);

    return(
        <div className="today-info">
            <h3 className="weather-title-part">Air quality</h3>
            <div className='air-quality-part'>
              <div className="gauage-air">
                <span>20</span>
                <select name="" id="" title="Pollutants">
                    <option value="pm2_5" title="Particulate Matter 2.5">PM 2.5</option>
                    <option value="pm10" title="Particulate Matter 10">PM 10</option>
                    <option value="nitrogen_dioxide" title="Nitrogen Dioxide">NO2</option>
                    <option value="ozone" title="Ozone">O3</option>
                    <option value="sulphur_dioxide" title="Sulphur Dioxide">SO3</option>
                </select>
              </div>
              <div className="quality-ranges">
                <span title="Extremely Poor Air Quality">800</span>
                <span title="Very Poor Air Quality">75</span>
                <span title="Poor Air Quality">50</span>
                <span title="Moderate Air Quality">25</span>
                <span title="Fair Air Quality">20</span>
                <span title="Good Air Quality">10</span>
              </div>
            </div>

            <h3 className="weather-title-part">Humidity</h3>

            <div className="humidity-part">
              <span>70%</span>
            </div>

            <h3 className="weather-title-part">UV Index</h3>

            <div className="uv-index">
              <span className="real-time-uv">&lt;1</span>
              <div className="ranges">
                <div className=" low range-level">
                  <span>1</span>
                  <span>2</span>
                  <p>Low</p>
                </div>
                <div className="moderate range-level">
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <p>Moderate</p>
                </div>
                <div className="high range-level">
                  <span>6</span>
                  <span>7</span>
                  <p>High</p>
                </div>
                <div className="very-high range-level">
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <p>Very High</p>
                </div>
                <div className="extreme range-level">
                  <span>11</span>
                  <p>Extreme</p>
                </div>
              </div>
            </div>

            <h3 className="weather-title-part">Wind Direction</h3>

             {/* <div className="wind-direction">
              <span>N</span>
              <span>E</span>
              <span>232&deg;</span>
              <span>S</span>
              <span>W</span>
            </div>  */}

        </div>
    );
}

export default TodayWeather;
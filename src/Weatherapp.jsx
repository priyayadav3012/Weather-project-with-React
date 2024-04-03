import { useState } from "react";

function Weatherapp() {

    const [cityName, setCityName] = useState("Jaipur")
    const [weather, setWeather] = useState({})
    console.log(weather)

    function handleChange(e) {
        setCityName(e.target.value)
    }

    function handleSearch() {
        const apiKey = "dcbcf175630f76ae8563f6bcbfde468c"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`


        if (cityName)
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok")
                    }
                    return response.json()
                })
                .then((data) => setWeather(data))
                .catch((error) => {
                    console.error("there was a problem with the fetch opreation:", error)
                })

    }

    return (<>
        <div className="bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center">
            <div className="w-3/5 h-4/5 bg-[#ffffff66] rounded-lg flex">
                {/* left pannel */}
                <div className="w-1/2 h-full bg-left bg-no-repeat bg-cover rounded-l-lg flex flex-col justify-between ">
                    <div className="flex justify-end m-4">
                        <p className="font-bold text-2xl">
                            {weather.name && `${weather.name},`} {weather.sys && `${weather.sys.country}`}
                        </p>
                    </div>
                    <div className="flex justify-center">

                    </div>
                    <div className="flex justify-between m-4">
                        <div className="font-bold text-xl text-gray-200">
                            <p>
                                {weather.coord && `${weather.coord.lon}`}<br></br>
                                {weather.coord && `${weather.coord.lat}`}

                            </p>

                        </div>
                        <div className="font-bold text-2xl text-gray-200">
                            
                            <p>{weather.main && `${weather.main.temp}`}</p>
                          
                        </div>
                    </div>
                </div>
                {/* Right pannel */}
                <div className="h-full w-1/2">
                    <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4"></div>

                    <div className="flex border border-grey-200 rounded-lg w-3/5 mx-auto">
                        <input value={cityName} onChange={handleChange} type="search" placeholder="Search" className="bg-transparent outline-none text-white placeholder-white px-2 py-1" />
                        <button onClick={handleSearch} className="text-1xl  text-white cursor-pointer mx-23">search</button>
                        
                    </div>
                    {weather.name &&
                    <div className="text-center text-white font-semibold my-4" >
                            <p>{weather.name},{weather.sys.country}</p>
                            <p>{weather.weather && weather.weather[0].description}</p>
                        </div>
}
{weather.main &&
                    <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                   
            <p>Temp</p>
            <p>{weather.main && `${weather.main.temp}`}</p>
        </div>
}
        <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
            <p>Visibility</p>
            <p>{weather.visibility && `${weather.visibility/1000}`}</p>
        </div>
        <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
            <p>Wind Speed</p>
            <p>{weather.wind && `${weather.wind.speed}meter/sec`}</p>
        </div>

                </div>
            </div>
        </div>
    </>);
}

export default Weatherapp;
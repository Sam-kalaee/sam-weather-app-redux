import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dateBuilder from '../../commons/functions/dateBuilder';
import { unitConvertHandle } from '../../features/unitConvert/unitConvertSlice';
import tempretureConversion from './tempretureConversion';

const AppBody = () => {
    const unitConvert = useSelector((state) => state.unitConvert.value)
    const selectedCityInfo = useSelector((state) => state.selectedCityInfo.value)
    const dispatch = useDispatch()


    if (!selectedCityInfo?.status) {
        return <h1
            className="text-explain"
        >
            please write the city name
        </h1>
    }


    if (selectedCityInfo?.message) {
        return <h1
            className="text-explain"
        >
            {
                selectedCityInfo?.message
            }
        </h1>
    }


    const temprature = tempretureConversion(selectedCityInfo, unitConvert)


    return (
        <div
            className='search-box'
        >

            <div className="location-box">

                <div className="location">
                    {`${selectedCityInfo?.name}, ${selectedCityInfo?.sys?.country}`}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    <h1 className='main-Temp'>
                        {temprature?.temp}

                    </h1>
                    <small>
                        Feels: {temprature?.feels_like}<br />
                    </small>
                    <br />
                    <p className='wind'>
                        <span>
                            <i className="fa-solid fa-wind"></i>
                        </span>
                        {' '}
                        {selectedCityInfo?.wind?.speed}m/s
                    </p>
                    <br />
                    <small>
                        Humidity
                        {' '}
                        {selectedCityInfo?.main?.humidity}%
                    </small>

                </div>

                <div className="weather">
                    {selectedCityInfo?.weather[0]?.description}
                </div>

            </div>
            <div
                className='convert-button-container'
            >
                <button
                    className={
                        `
                    convert-button +
                    ${(selectedCityInfo?.main?.temp > Number(12 + 273.15))
                            ? 'button-warm'
                            : 'button-cold'
                        }
                `
                    }
                    onClick={async () => {

                        const newUnit = unitConvert === 'C' ? 'F' : 'C';

                        dispatch(unitConvertHandle(newUnit))
                    }}
                >
                    Convert in {unitConvert === 'C' ? 'Fahrenheit' : 'Celsius'}
                </button>
            </div>

        </div>
    )
}

export default AppBody;

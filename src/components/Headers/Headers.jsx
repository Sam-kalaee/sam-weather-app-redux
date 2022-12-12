import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchHandle } from '../../features/search/searchSlice';
import { selectedCityInfoHandle } from '../../features/selectedCityInfo/selectedCityInfoSlice';
import fetchCityWeatherInfo from '../../services/openweathermap/fetchCityWeatherInfo';

const Headers = () => {

    const selectedCityInfo = useSelector((state) => state.selectedCityInfo.value)

    const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1
                className='text-header'
            >
                Weather App
            </h1>

            <div className="search-box">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        value={search}
                        onChange={(event) => {
                            const newSearch = event.target.value;
                            dispatch(searchHandle(newSearch))
                        }}
                    />

                    <button
                        className={
                            `
                            search-button +
                            ${(selectedCityInfo?.main?.temp > Number(12 + 273.15))
                                ? 'button-warm'
                                : 'button-cold'
                            }
                        `
                        }
                        onClick={async () => {
                            const result = await fetchCityWeatherInfo((search || '').toLowerCase())
                            dispatch(selectedCityInfoHandle(result))
                        }}
                    >
                        Find
                    </button>
                </div>
            </div>
        </>
    )
};


export default Headers;

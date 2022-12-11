import React, { useContext, useState } from 'react'
import { AppContext, immutableSetStateExternal } from '../../context/AppContext';
import fetchCityWeatherInfo from '../../services/openweathermap/fetchCityWeatherInfo';

const Headers = () => {

    const [appState, immutableSetState] = useContext(AppContext);

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
                        value={appState.search}
                        onChange={(event) => {
                            const newSearch = event.target.value;
                            immutableSetState((draft) => {
                                draft.search = newSearch;
                            });
                        }}
                    />

                    <button
                        className={
                            `
                            search-button +
                            ${(appState?.selctedCityInfo?.main?.temp > Number(12 + 273.15))
                                ? 'button-warm'
                                : 'button-cold'
                            }
                        `
                        }
                        onClick={async () => {
                            const result = await fetchCityWeatherInfo((appState?.search || '').toLowerCase())
                            immutableSetState((draft) => {
                                draft.selctedCityInfo = result;
                            });
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

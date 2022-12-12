import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../features/search/searchSlice'
import selectedCityInfoSlice from '../features/selectedCityInfo/selectedCityInfoSlice'
import unitConvertSlice from '../features/unitConvert/unitConvertSlice'


export const store = configureStore({
    reducer: {
        search: searchSlice,
        unitConvert: unitConvertSlice,
        selectedCityInfo: selectedCityInfoSlice,
    },
})


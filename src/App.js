import './App.css';
import Headers from './components/Headers/Headers';
import AppBody from './components/AppBody/AppBody';
import { useSelector } from 'react-redux';


function App() {

  const selectedCityInfo = useSelector((state) => state.selectedCityInfo.value)
  return (

    <div
      className={
        (selectedCityInfo?.main?.temp > Number(12 + 273.15))
          ? 'app warm'
          : 'app'
      }
    >

      <main>
        <Headers />

        <AppBody />

      </main>

    </div>

  );

}




export default App;

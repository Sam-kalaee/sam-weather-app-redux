import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers/Headers';
import AppBody from './components/AppBody/AppBody';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const [appState] = useContext(AppContext);
  return (

    <div
      className={
        (appState?.selctedCityInfo?.main?.temp > Number(12 + 273.15))
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

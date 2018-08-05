/* beimportálom a react objectet a package.json-ből */
import React from 'react';
/* importálom azt az összetevőmet, ami a weboldal címéért lesz felelős (nem szükséges kiírnom a .js-t) */
import Titles from './Components/Titles';
/* a form-omért felelős filet is importálom */
import Form from './Components/Form';
import Weather from './Components/Weather';
/* https://home.openweathermap.org/ regisztrációt követően lekértem az API-t, hogy valós időjárás adatokat kapjak 
majd ezt elmentettem egy változóban*/
const API_KEY = 'bea5333b320643bb4ca57cd6ed1aabf4';
/* App: appom neve, használhatja a react összetevőket 
REact.Component: object a package-ből továbbra is */
class App extends React.Component {
  /* csinálok egy methodot, ami lekéri az API-t
  arrow functionnal constructor létrehozása nélkül tudom szabadon használni a 'this'-t */
  getWeather = async (e) => {
    /* ezt a fetch részt nem teljesen értem. az url-t beillesztem, amit emailben elküldtek */
    e.preventDefault(); //megelőzi az oldal újratöltését
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bea5333b320643bb4ca57cd6ed1aabf4');
    /* átalakítom a visszakapott adatot JSON-né */
    const data = await api_call.json();
    console.log(data);
  }
  /* beépített method, JSX-et ad vissza 
  JSX: HTML-re hasonlít, de nem az, hanem JS */
  render() {
    return (
      /* JSX: a babel a háttérben átalakítja JS-té, hogy a böngésző értse */
      /* Fontos: csak 1 parent elementet tudok return-ölni */
      <div>
        {/* nem elég, hogy beimportálom az összetevőt, renderelnem is kell, hogy megjelenjen az oldalon */}
        <Titles />
        {/* a válasz adat megszerzésére létrehozott methodot hívom */}
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};


/* elérhetővé teszem a többi file-om számára */
export default App;
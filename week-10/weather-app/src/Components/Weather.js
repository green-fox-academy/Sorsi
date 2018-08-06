import React from 'react';
/* még rövidebb megoldás: a return sem kell
C VERZIÓ */
const Weather = props => (
  <div>
    {/* ha a city és a country meg lett adva, csak akkor jelenjen meg a többi html element */}
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

/* ha a Component-em nem tartalmaz statet, akkor elhagyhatjuk a rendert és az extendst (B verzió) 
(pl app.js tartalmaz, ezért ott ez nem igaz, ott class van) */

//--------------------------------------------A VERZIÓ----------------------------------------------------------//
//const Weather = () => {
//  return (
//    <div>
//      {/* ha a city és a country meg lett adva, csak akkor jelenjen meg a többi html element */}
//      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
//      {props.temperature && <p>Temperature: {props.temperature}</p>}
//      {props.humidity && <p>Humidity: {props.humidity}</p>}
//      {props.description && <p>Conditions: {props.description}</p>}
//      {props.error && <p>{props.error}</p>}
//    </div>
//  );
//}

//--------------------------------------------B VERZIÓ----------------------------------------------------------//
//class Weather extends React.Component {
//  render() {
//    return (
//      <div>
//        {/* ha a city és a country meg lett adva, csak akkor jelenjen meg a többi html element */}
//        { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
//        { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
//        { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
//        { this.props.description && <p>Conditions: { this.props.description }</p> }       
//        { this.props.error && <p>{ this.props.error }</p> }       
//      </div>
//    );
//  }
//}

export default Weather;
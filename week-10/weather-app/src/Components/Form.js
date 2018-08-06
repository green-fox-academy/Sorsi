import React from 'react';


const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."></input>
    <input type="text" name="country" placeholder="Country..."></input>
    <button>Get weather!</button>
  </form>
)

/* class Form extends React.Component {
  render() {
    return (
      // a form kitöltése után történjen meg a getWeather method (applicationCache.js-ben) //
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..."></input>
        <input type="text" name="country" placeholder="Country..."></input>
        <button>Get weather!</button>
      </form>
    );
  }
} */

export default Form;
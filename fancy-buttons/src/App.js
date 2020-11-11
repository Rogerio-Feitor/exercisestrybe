import React from 'react';

class App extends React.Component {
  constructor(props) {
    super()
    console.log('Aplicação sendo construida')
    this.handleClick = this.handleClick.bind(this)
    this.hisButton = this.hisButton.bind(this)
    this.ourButton = this.ourButton.bind(this)
    this.state = {
      clicksNumber: 0,
      myThis: 2,
      ourThis: 3
    }
  }
  handleClick() {
    this.setState((previwesClicks, _props) =>  ({
      clicksNumber: previwesClicks.clicksNumber + 1
    }))
    console.log(this)
    console.log('Meu this');
  }
  hisButton() {
    this.setState((previwesMyThis, _props) => ({
      myThis: previwesMyThis.myThis + 2
    }))
    console.log(this)
    console.log('O this Dele');
  }
  ourButton() {
    this.setState((previwesOurThis, _props) => ({
      ourThis: previwesOurThis.ourThis + 3
    }))
    console.log(this)
    console.log('Nosso this');
  }
  render() {
  return (
    <div>
      <button onClick={this.handleClick}>{this.state.clicksNumber}</button>
      <button onClick={this.hisButton}>{this.state.myThis}</button>
      <button onClick={this.ourButton}>{this.state.ourThis}</button>
    </div>
  );
}
}
export default App;

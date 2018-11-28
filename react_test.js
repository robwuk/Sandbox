'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

/*class titleText extends React.Component(){
  constructor(props){
    super(props);
  }
  render() {
    return (<div>React Test - from react_test.js</div>)
  }
}

class headerConfig extends React.Component(){
  constructor(props){
    super(props);
  }
  render(){
    return(<header><h1>test</h1></header>);
  }
}*/
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
const domContainer = document.querySelector('#header_1');
ReactDOM.render(element,domContainer);
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

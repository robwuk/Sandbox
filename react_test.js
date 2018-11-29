'use strict';

class App extends React.Component {
    render() {
        return (
            <div className="app">
              <Title />
        );
    }
}
function Title() {
  return (<p className="title">My awesome chat app</p>);
}

ReactDOM.render(<App />, document.getElementById('root'));

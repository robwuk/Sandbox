'use strict';

class App extends React.Component {
    render() {
        return (
            <div className="app">
              <Title />
/*              <MessageList
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>*/
        );
    }
}
function Title() {
  return <p className="title">My awesome chat app</p>
}

ReactDOM.render(<App />, document.getElementById('root'));

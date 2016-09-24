import React from 'react';
import ChatBox from './ChatBox';

class App extends React.Component { // alternative way => class App extends Component {
  
  render() {
    return (
      <div>
        <ChatBox />
      </div>
    );
  }
}


export default App;
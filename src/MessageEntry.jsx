import React, {Component} from 'react';

class MessageEntry extends Component {
  constructor() {
    super();
    this.state = {
      entry: ''
    }
  }
  onSendMessage = () => {
    console.log("send!!")
    let entry = this.state.entry;
    this.props.chatStore.addMessage(entry)
    this.setState({entry: ''})
    
  }
  onChangeEntry = (e) => {
    this.setState({entry: e.target.value});
  }

  submitWhenEnterPress = (e) => {
    if (e.charCode === 13) this.onSendMessage();
  }
  
  isEmptyMessage = () => this.state.entry.length === 0;

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeEntry} value={this.state.entry} onKeyPress={this.submitWhenEnterPress}/>
        <button onClick={this.onSendMessage} disabled={this.isEmptyMessage()}>Send</button>
      </div>
    );
  }
}

export default MessageEntry;
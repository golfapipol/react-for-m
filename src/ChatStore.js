import {observable, action, computed} from 'mobx'
export default class ChatStore {
  @observable messages = ['Hello'];

  @action addMessage(text) {
    this.messages.push(text)
  }

  //@computed is observer that can be observable??? (not sure google it!)
  @computed get messageCount() {
    return `Message Count is ${this.messages.length}`;
  }

  // isomorphic-fetch package for ajax
}
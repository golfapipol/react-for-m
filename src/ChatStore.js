import {observable} from 'mobx'
export default class ChatStore {
  @observable messages = ['Hello'];

  @action addMessage(text) {
    this.messages.push()
  }


  // isomorphic-fetch package for ajax
}
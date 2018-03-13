import {Injectable} from '@angular/core';
import {emojis} from './emojis';

@Injectable()
export class StateService {
  messages = [];
  message = '';
  emojis = emojis;

  submit(message) {
    this.messages.push(message);
    this.message = '';
  }

  getMessages() {
    return this.messages;
  }

}

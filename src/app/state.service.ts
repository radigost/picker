import {Injectable} from '@angular/core';
import {emojis} from './emojis';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

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

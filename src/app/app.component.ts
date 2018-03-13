import {Component, OnInit} from '@angular/core';
import {StateService} from './state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages;
  message = '';

  constructor(public stateService: StateService) {
  }

  ngOnInit() {
    this.messages = this.stateService.getMessages();
  }

  submit(message) {
    this.stateService.submit(message);
    this.message = '';
  }

  pick(emoji) {
    this.message = `${this.message} ${emoji.symbol} `;
  }
}

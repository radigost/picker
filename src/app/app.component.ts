import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";
import {emojis} from './emojis'


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  messages = [];
  message = "";
  emojis = emojis;
  showEmojiPicker=false;

  submit(message) {
    this.messages.push(message);
    this.message = '';
  }
  pick(emoji) {
    this.message = `${this.message} ${emoji.symbol}`;
    this.showEmojiPicker=false;
  }
  triggerEmojiPicker(){
    this.showEmojiPicker=!this.showEmojiPicker;
  }
}

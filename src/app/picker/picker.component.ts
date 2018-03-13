import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {
  showEmojiPicker = false;
  @Input() emojis;
  @Output() onPicked = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  triggerEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  pick(emoji) {
    this.onPicked.emit(emoji);
    this.showEmojiPicker = false;
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent {
  showEmojiPicker = false;
  @Input() emojis;
  @Output() onPicked = new EventEmitter();

  triggerEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  pick(emoji) {
    this.onPicked.emit(emoji);
    this.showEmojiPicker = false;
  }
}

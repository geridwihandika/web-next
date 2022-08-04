import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { messageModel } from '../message.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Output() messageToParent = new EventEmitter<messageModel>();

  @Input() messageFromParent!: messageModel;
  listMessage!: messageModel[];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(i: number) {
    this.messageToParent.emit(this.listMessage[i]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.listMessage && this.messageFromParent){
      this.listMessage.push(this.messageFromParent);
    } else if (!this.listMessage && this.messageFromParent){
      this.listMessage = [this.messageFromParent];
    }
    console.log(this.listMessage);
  }

}

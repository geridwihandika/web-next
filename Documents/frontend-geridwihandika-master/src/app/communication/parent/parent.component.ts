import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { messageModel } from '../message.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild!: messageModel;
  formMessage!: FormGroup

  constructor(private formBuild: FormBuilder) {
    this.formMessage= this.formBuild.group( { 
      'name' : new FormControl( null, [Validators.required]),
      'message' : new FormControl(null, [Validators.required])
    });

}

ngOnInit(): void {}


sendMessage(){
  const message: messageModel =  new messageModel();
  message.name = this.formMessage.controls['name'].value;
  message.message = this.formMessage.controls['message'].value;
  this.messageToChild = message;
  this.formMessage.reset();
  this.formMessage.untouched;
  console.log(this.messageToChild);
}
acceptMessage($event: messageModel): void{
  console.log($event)
  this.formMessage.controls['name'].setValue($event.name);
  this.formMessage.controls['message'].setValue($event.message);
}


}

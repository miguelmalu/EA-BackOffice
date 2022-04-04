import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Message } from 'src/app/models/message';

import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  messageForm: FormGroup;
  title = "Create Message";

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _messageService: MessageService,
    private _userService: UserService,
    private aRouter: ActivatedRoute) {
      this.messageForm = this.fb.group({
        message: ['', Validators.required],
        sender: ['', Validators.required],
        receiver: [],
        activity: []
      });

      //this.message = this.aRouter.snapshot.paramMap.get('message');
      //console.log(this.message);
     }

  ngOnInit(): void {
      //this.addMessage();
  }

  addMessageUser() {

    const message: Message = {
      message: this.messageForm.get('message')?.value,
      sender: this.messageForm.get('sender')?.value,
      receiver: this.messageForm.get('receiver')?.value,
      activity: this.messageForm.get('activity')?.value

    }

    // Add message
    console.log(message);

    if (message.receiver != null){
      this._messageService.addMessageUserByName(message).subscribe(data => {
        this.toastr.success('Message successfully created!', 'Message created --> User');
        this.router.navigate(['/list-messages']);
      }, error => {
        console.log(error);
        this.messageForm.reset();
      })
    } else if (message.activity != null) {
      this._messageService.addMessageActivityByName(message).subscribe(data => {
        this.toastr.success('Message successfully created!', 'Message created --> Activity');
        this.router.navigate(['/list-messages']);
      }, error => {
        console.log(error);
        this.messageForm.reset();
      })
    } else console.log("Error: no receiver nor activity")

    
  }
}



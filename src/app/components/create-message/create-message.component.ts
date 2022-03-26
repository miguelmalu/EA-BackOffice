/*import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';


import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';

import { MessageService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  messageForm: FormGroup;
  title = "Create Message";
  message: Message | null;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _messageService: MessageService,
    private _userService: UserService,
    private senderId: User,
    private receiverId: User,
    private aRouter: ActivatedRoute) {
      this.messageForm = this.fb.group({
        message: ['', Validators.required],
        sender: ['', Validators.required],
        receiver: ['', Validators.required]
      });

      //this.message = this.aRouter.snapshot.paramMap.get('message');
      //console.log(this.message);
     }

  ngOnInit(): void {
 //   this.addMessage();
  }

  addMessageUser() {

    const message: Message = {
      message: this.messageForm.get('message')?.value,
      sender: this.messageForm.get('sender')?.value,
      receiver: this.messageForm.get('receiver')?.value
    }

    senderId: this._userService.getUser(message.sender);


    const mess: this.messageForm.get('message')?.value;
    sender: this.messageForm.get('message')?.value;
    receiver: this.messageForm.get('receiver')?.value;
    // Add message
    //console.log(message);

    this._messageService.addMessageUser(mess, sender, receiver).subscribe(data => {
      this.toastr.success('Message successfully created!', 'Message created');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.messageForm.reset();
    })
  }
}
*/


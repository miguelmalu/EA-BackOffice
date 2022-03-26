import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/service/message.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-messages-activity',
  templateUrl: './list-messages-activity.component.html',
  styleUrls: ['./list-messages-activity.component.css']
})
export class ListMessagesActivityComponent implements OnInit {

  listMessages: Message[] = [];
  name: string | null;

  constructor(private _messageService: MessageService,
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
      this.name = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.name);}

  ngOnInit(): void {
    if (this.name != null)
      this.getMessagesByActivity(this.name);
    else
      this.toastr.error('Name not found', 'Activities not found');
  }

  getMessagesByActivity(name: string) {
    this._messageService.getMessagesByReceiver(name).subscribe(data => {
      console.log(data);
      this.listMessages = data;
    }, error => {
      console.log(error);
    })
  }

}

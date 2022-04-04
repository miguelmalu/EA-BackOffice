import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-messages-receiver',
  templateUrl: './list-messages-receiver.component.html',
  styleUrls: ['./list-messages-receiver.component.css']
})
export class ListMessagesReceiverComponent implements OnInit {
  listMessages: Message[] = [];
  id: string | null;

  constructor(private _messageService: MessageService,
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
    }
  

  ngOnInit(): void {
    if (this.id != null)
      this.getMessagesByReceiver(this.id);
    else
      this.toastr.error('Id not found', 'Messages not found');
  }

  getMessagesByReceiver(id: string) {
    this._messageService.getMessagesByReceiver(id).subscribe(data => {
      console.log(data);
      this.listMessages = data;
    }, error => {
      console.log(error);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  listMessages: Message[] = [];
  constructor(private _messageService: MessageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this._messageService.getMessages().subscribe(data => {
      console.log(data);
      this.listMessages = data;
    }, error => {
      console.log(error);
    })
  }

  deleteMessage(id: string) {

    const confirmDelete = confirm("Message will be deleted, do you want to continue?");
    if(confirmDelete===true){

      this._messageService.deleteMessage(id).subscribe(data => {
        this.toastr.error('Message successfully deleted', 'Message deleted');
        this.getMessages();
      }, error => {
        console.log(error);
      })
    }
  }
}

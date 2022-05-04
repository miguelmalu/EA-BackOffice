import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
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
  id: string | null;

  constructor(private _messageService: MessageService,
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);}

  ngOnInit(): void {
    if (this.id != null)
      this.getMessagesByActivity(this.id);
    else{
      this.toastr.error('Id not found', 'Messages not found');
    }
  }

  getMessagesByActivity(id: string) {
    this._messageService.getMessagesByActivity(id).subscribe(data => {
      console.log(data);
      this.listMessages = data;
    }, error => {
      console.log(error);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatRoomServiceService } from '../service/chat-room-service.service';

@Component({
  selector: 'app-chatgroup',
  templateUrl: './chatgroup.component.html',
  styleUrls: ['./chatgroup.component.css']
})
export class ChatgroupComponent implements OnInit {

  message:string='';
  
  constructor(private service:ChatRoomServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log("sending message : "+this.message);
    this.service.sendMessage(this.message);
  }
}

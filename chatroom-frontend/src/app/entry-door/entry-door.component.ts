import { Component, OnInit } from '@angular/core';
import { ChatRoomServiceService } from '../service/chat-room-service.service';

@Component({
  selector: 'app-entry-door',
  templateUrl: './entry-door.component.html',
  styleUrls: ['./entry-door.component.css']
})
export class EntryDoorComponent implements OnInit {

  username:string='';
  constructor(private service:ChatRoomServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    this.service.sendUserRegister(this.username);
  }
  

}

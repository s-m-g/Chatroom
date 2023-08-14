import { Component, OnInit } from '@angular/core';
import { ChatRoomServiceService } from '../service/chat-room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-door',
  templateUrl: './entry-door.component.html',
  styleUrls: ['./entry-door.component.css']
})
export class EntryDoorComponent implements OnInit {

  username:string='';
  constructor(private service:ChatRoomServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.service.sendUserRegister(this.username);
    this.router.navigateByUrl('/chatgroup');
  }
  

}

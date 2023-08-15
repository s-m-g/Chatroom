import { Component, OnInit } from '@angular/core';
import { ChatRoomServiceService } from '../service/chat-room-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatgroup',
  templateUrl: './chatgroup.component.html',
  styleUrls: ['./chatgroup.component.css']
})
export class ChatgroupComponent implements OnInit {

  message:string='';
  currUser:string='default';
  joiningType:string='joining'
  youjoined:boolean=false;
  
  constructor(public service:ChatRoomServiceService,
              private route:ActivatedRoute
    ) {
    this.service.establishConnectionWithWebSocket();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((obj)=>{
      this.currUser = obj['username'];
    });
    this.youjoined=true;
  }

  ngAfterViewChecked():void{
    this.goToBottom();
  }

  submit(){
    let msg={
      "user":this.currUser,
      "message":this.message,
      "type":"message"
    }
    console.log("sending message to kafka : "+this.message);
    this.service.sendMessage(msg);
    this.message="";
    
  }

  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
}

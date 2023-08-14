import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomServiceService {

  sendMsgURL:string="http://localhost:8080/chatroom/publish";
  wsconnectionURL="http://localhost:8080/connectToWebSocket";
  stompClient: any;

  public msgArr:Message[]=[];

  constructor(private http: HttpClient) { }


  sendUserRegister(message :string){
    console.log("user register sent : "+message);
  }

  sendMessage(message:string){

    const body={
      "user":"alien",
      "message":message
    }
    
    let observable = this.http.post(this.sendMsgURL, body, {responseType: 'text'});

    observable.subscribe({
      next : (response)=>{
        console.log(response);
      },
      error : (error)=>{
        console.log("from errors:");
        console.log(error);
      }
    });
  }

  establishConnectionWithWebSocket(){
    
    let ws = new SockJS(this.wsconnectionURL);
    this.stompClient = Stomp.over(ws);

    const _this = this;

    
    _this.stompClient.connect({}, function(frame:any){
      _this.stompClient.subscribe("/topic/chatRoomAllMessages", (message:any)=>{
        if(message.body){
          console.log(message.body);
          _this.msgArr.push(message.body);
        }
      });
    });
  }

}

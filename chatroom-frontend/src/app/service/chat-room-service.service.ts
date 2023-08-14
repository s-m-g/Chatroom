import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomServiceService {

  sendMsgURL:string="http://localhost:8080/chatroom/publish";

  constructor(private http: HttpClient) { }


  sendUserRegister(message :string){
    console.log("user register sent : "+message);
  }

  sendMessage(message:string){

    const body={
      "user":"alien",
      "message":message
    }
    
    let observable = this.http.post(this.sendMsgURL, body);

    observable.subscribe({
      next : (response)=>{
        console.log(response);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }
}

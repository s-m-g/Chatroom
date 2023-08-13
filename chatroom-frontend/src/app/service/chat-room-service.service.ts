import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomServiceService {

  constructor() { }


  sendUserRegister(message :string){
    console.log("user register sent : "+message);
  }

  sendMessage(message:string){
    console.log("message sent"+message);
  }
}

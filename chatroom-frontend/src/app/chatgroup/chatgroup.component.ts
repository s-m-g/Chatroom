import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatgroup',
  templateUrl: './chatgroup.component.html',
  styleUrls: ['./chatgroup.component.css']
})
export class ChatgroupComponent implements OnInit {

  message:string='';
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.message);
  }
}

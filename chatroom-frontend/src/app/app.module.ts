import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryDoorComponent } from './entry-door/entry-door.component';
import { FormsModule } from '@angular/forms';
import { ChatRoomServiceService } from './service/chat-room-service.service';
import { ChatgroupComponent } from './chatgroup/chatgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryDoorComponent,
    ChatgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ChatRoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

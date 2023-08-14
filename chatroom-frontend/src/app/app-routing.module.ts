import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatgroupComponent } from './chatgroup/chatgroup.component';
import { EntryDoorComponent } from './entry-door/entry-door.component';

const routes: Routes = [
  {
    path : 'chatgroup',
    component : ChatgroupComponent
  },
  {
    path : '',
    component : EntryDoorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

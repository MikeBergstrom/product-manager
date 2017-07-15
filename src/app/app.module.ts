import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReateComponent } from './reate/reate.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { CommunicateService } from './communicate.service'

@NgModule({
  declarations: [
    AppComponent,
    ReateComponent,
    EditComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

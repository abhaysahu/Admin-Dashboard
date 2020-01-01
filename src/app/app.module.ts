import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { DefaultModule } from './layouts/default/default.module';
import { ShardModule } from './shard/shard/shard.module';
import { AreaComponent } from './shard/widget/area/area.component';



@NgModule({
  declarations: [
    AppComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

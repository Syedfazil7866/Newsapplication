import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import {HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';
import { IndiaComponent } from './india/india.component';



@NgModule({
  declarations: [AppComponent,NewsComponent,IndiaComponent],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot([

             {path:'apple',component:NewsComponent},
             {path:'india', component:IndiaComponent}

    ])
  
  
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
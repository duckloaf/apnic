import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxSortableModule } from 'ngx-sortable'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';
import { ApnicService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSortableModule
  ],
  providers: [ApnicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

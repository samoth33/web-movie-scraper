import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageService } from './search-page-service/search-page.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [SearchPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

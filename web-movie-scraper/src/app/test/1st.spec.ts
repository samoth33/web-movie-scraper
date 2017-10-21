//primo test di prova
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "../app.component";
import { SearchPageComponent } from "../search-page/search-page.component";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchPageService } from "../search-page-service/search-page.service";

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      SearchPageComponent      
    ],
    imports: [
      BrowserModule, FormsModule, HttpClientModule
    ],
    providers: [SearchPageService]
  });
});




describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
  });

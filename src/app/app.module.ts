import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TypeaheadChipInputModule } from './shared/components/typeahed-chip-input/typeahead-chip-input.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    TypeaheadChipInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

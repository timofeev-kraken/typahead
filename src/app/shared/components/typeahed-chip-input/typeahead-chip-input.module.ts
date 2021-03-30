import {NgModule} from '@angular/core';
import {TypeaheadChipInputComponent} from './typeahead-chip-input.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [TypeaheadChipInputComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [TypeaheadChipInputComponent],
})
export class TypeaheadChipInputModule {}

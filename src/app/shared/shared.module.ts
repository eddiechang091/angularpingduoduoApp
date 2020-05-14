import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ImageSliderComponent, ScrollableTabComponent, HorizontalGridComponent } from './components'

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    ImageSliderComponent,
    ScrollableTabComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }

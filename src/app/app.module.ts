import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PaintSquareActionDirective } from './paint-square-action/paint-square-action.directive';
import {PaintMessageService} from './paint-message/paint-message.service';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PaintSquareActionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [PaintMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

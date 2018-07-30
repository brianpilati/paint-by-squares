import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PaintSquareActionDirective } from './paint-square-action/paint-square-action.directive';
import {PaintMessageService} from './paint-message/paint-message.service';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageNavigationComponent } from './image-navigation/image-navigation.component';
import {ImageService} from './image-service/image.service';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PaintSquareActionDirective,
    ImageNavigationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [PaintMessageService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }




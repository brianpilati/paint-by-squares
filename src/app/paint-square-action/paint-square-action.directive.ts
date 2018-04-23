import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SquareData} from '../interfaces/square-data';
import { Subscription } from 'rxjs/Subscription';
import {PaintMessageService} from '../paint-message/paint-message.service';


@Directive({
  selector: '[appPaintSquareAction]'
})
export class PaintSquareActionDirective implements OnInit, OnDestroy {
  @Input() squareData: SquareData;
  subscription: Subscription;
  private isPainted = false;

  private setPainted(): void {
    this.isPainted = !this.isPainted;
    this.setSquareText(this.isPainted ? '' : this.squareData.squareNumber.toString());
  }

  private paintSquare(classColor: string): void {
    if (classColor === this.squareData.class) {
      this.renderer.addClass(this.element.nativeElement, classColor);
      this.setPainted();
    }
  }

  private setSquareText(text: string) {
    this.element.nativeElement.innerText = text;
  }

  private unPaintSquare(classColor: string): void {
    this.renderer.removeClass(this.element.nativeElement, classColor);
    this.setPainted();
  }

  @HostListener('click') OnSingleClick(): void {
    this.isPainted ? this.unPaintSquare(this.squareData.class) :
      this.paintSquare(this.squareData.class);
  }

  @HostListener('dblclick') OnDoubleClick(): void {
    this.paintMessageService.sendColor(this.squareData.class);
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private paintMessageService: PaintMessageService
  ) {
    this.subscription = this.paintMessageService.getColor().subscribe(color => {
      this.paintSquare(color);
    });
  }

  ngOnInit() {
    if (this.squareData.squareNumber === 0) {
      this.setSquareText('');
    } else {
      this.renderer.addClass(this.element.nativeElement, 'action');
      this.setSquareText(this.squareData.squareNumber.toString());
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

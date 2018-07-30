import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PaintMessageService {
  private color = new Subject<string>();

  sendColor(colorClass: string): void {
    this.color.next( colorClass);
  }

  getColor(): Observable<any> {
    return this.color.asObservable();
  }

  constructor() { }
}

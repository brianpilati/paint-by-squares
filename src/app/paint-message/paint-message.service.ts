import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

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

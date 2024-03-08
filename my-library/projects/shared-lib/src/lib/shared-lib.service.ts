import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedLibService {
  private data = new BehaviorSubject<any>('Initial data');

  getData() {
    return this.data.asObservable();
  }

  setData(data: any) {
    this.data.next(data);
  }

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

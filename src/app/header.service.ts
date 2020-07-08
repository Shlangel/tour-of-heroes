import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  private defaultTitle = 'Tour of Heroes';
  public title$: BehaviorSubject<string> = new BehaviorSubject<string>(this.defaultTitle);

  get title(): string {
    return this.title$.getValue();
  }

  set title(value: string) {
    this.title$.next(value);
  }

  setDefaultTitle() {
    this.title$.next(this.defaultTitle);
  }
}

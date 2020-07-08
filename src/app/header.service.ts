import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public title = 'Tour of Heroes'

  getHeader() {
    return this.title;
  }

  changeHeader(heroName) {
    this.title += ' - ' + heroName; 
  }

  cleanUpHeader() {
    this.title = 'Tour of Heroes'
  }
}

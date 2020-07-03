import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //TODO: send the message _after_ fetching the heroes
    this.messageService.openSnackBar('HeroService: fetched heroes', undefined);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.openSnackBar(`HeroService: fetched hero id=${id}`, undefined);
    return of(HEROES.find(hero => hero.id === id));
  }

  private heroesUrl = 'api/heroes';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.openSnackBar(`HeroService: ${message}`, undefined);
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action) {
    this.snackBar.open(message, action, {
      duration: 1200,
    })
  }
}

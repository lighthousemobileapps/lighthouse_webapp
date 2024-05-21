import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() { }

  isDarkMode(){
    return this.darkMode;
  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;
  }
}

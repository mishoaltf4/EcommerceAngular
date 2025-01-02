import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private themeKey = 'theme';
  themeChange : EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  getCurrentTheme(): string{
    return localStorage.getItem(this.themeKey) || 'light';
  }

  setTheme(theme: string){
    localStorage.setItem(this.themeKey, theme);
    this.themeChange.emit(theme);
  }
}

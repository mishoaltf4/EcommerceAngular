import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private darkThemeClass = 'dark';
  constructor() { }

  enableDarkThemeClass() {
    document.documentElement.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  disableDarkThemeClass() {
    document.documentElement.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }

  initialTheme() {
    const savedTheme = localStorage?.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkThemeClass();
    }else{
      this.disableDarkThemeClass();
    }
  }
}

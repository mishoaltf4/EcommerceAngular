import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeServiceService} from './services/theme-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'EcommerceApp';
  isDarkTheme: boolean = false;
  constructor(private themeService: ThemeServiceService) { }

  ngOnInit() {
    this.themeService.initialTheme()
    this.isDarkTheme = document.documentElement.classList.contains('dark');
  }

  toggleTheme(): void{
    this.isDarkTheme = !this.isDarkTheme;
    if(this.isDarkTheme){
      this.themeService.enableDarkThemeClass()
    }else{
      this.themeService.disableDarkThemeClass()
    }
  }
}

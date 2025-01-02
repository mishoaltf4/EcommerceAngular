import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeServiceService} from './services/theme-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title: string = 'EcommerceApp';
  currentTheme: string;
  constructor(private themeService: ThemeServiceService) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.updateTheme();
  }

  toggleTheme():void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.currentTheme);
    this.updateTheme();
  }

  private updateTheme(){
    document.body.className = this.currentTheme;
  }
}

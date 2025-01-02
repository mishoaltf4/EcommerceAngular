import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ThemeServiceService} from '../../../../services/theme-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit , OnDestroy {
  value = '';
  logo: string = '/images/site-logo.svg';
  private subscription!: Subscription;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit(): void {
    this.updateLogo();
    this.subscription = this.themeService.themeChange.subscribe(() => {
      this.updateLogo();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateLogo(): void {
    const currentTheme = this.themeService.getCurrentTheme();
    this.logo = currentTheme === 'light' ? '/images/site-logo.svg' : '/images/whiteLogo.svg';
  }
}

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ThemeServiceService} from '../../../../services/theme-service.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  value = '';

  blog(): void{
    console.log(localStorage?.getItem('theme'))
  }
}

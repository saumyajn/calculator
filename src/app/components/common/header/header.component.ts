import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { MaterialModule } from '../../../services/material.module';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private themeService: ThemeService) { }
  switchTheme() {
  const current = this.themeService.getTheme();
    const next = current === 'indigo-pink' ? 'magenta-violet' : 'indigo-pink';

    this.themeService.setTheme(next);

  }
}

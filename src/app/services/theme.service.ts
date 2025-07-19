import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme = 'magenta-violet'
  setTheme(themeName: 'indigo-pink' | 'magenta-violet') {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `./assets/themes/${themeName}.css`;
      this.currentTheme = themeName;
      console.log(themeLink)
    }
  }
    getTheme() {
    return this.currentTheme;
  }
}

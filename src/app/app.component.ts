import { Component, HostBinding, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'QandA';
  isLightTheme!: boolean;
  currentLanguage!: string;

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isLightTheme = theme === 'light';
    });

    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  @HostBinding('class') get themeMode() {
    return this.isLightTheme ? 'light-theme' : 'dark-theme';
  }

  switchLanguage() {
    this.languageService.switchLanguage();
  }
}

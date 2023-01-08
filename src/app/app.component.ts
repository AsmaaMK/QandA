import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'QandA';
  isLightTheme!: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isLightTheme = theme === 'light';
    });
  }

  @HostBinding('class') get themeMode() {
    return this.isLightTheme ? 'light-theme' : 'dark-theme';
  }
}

import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
})
export class ThemeTogglerComponent implements OnInit {
  isLightTheme!: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isLightTheme = this.themeService.getTheme() === 'light';
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

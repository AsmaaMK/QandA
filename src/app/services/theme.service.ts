import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

const THEME_KEY = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = new BehaviorSubject<'light' | 'dark'>('light');

  constructor(private storageService: StorageService) {
    this.initTheme();
  }

  toggleTheme(): void {
    this.currentTheme.next(
      this.currentTheme.value === 'dark' ? 'light' : 'dark'
    );
    this.storageService.setStorageValue(THEME_KEY, this.currentTheme.value);
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme.value;
  }

  initTheme(): void {
    const theme = this.storageService.getStorageValue(THEME_KEY);
    if (theme) {
      this.currentTheme.next(theme);
    } else {
      this.currentTheme.next(this.getSystemTheme());
    }
  }

  getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

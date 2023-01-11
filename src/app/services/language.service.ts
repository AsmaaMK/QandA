import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

const LANGUAGE_KEY = 'language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  get currentLanguage$() {
    return this.currentLanguage.asObservable();
  }

  constructor(
    private translateService: TranslateService,
    private storageService: StorageService
  ) {
    this.initLanguage();
  }

  private initLanguage() {
    let language = this.getStoredLanguage();
    if (!language) {
      language = this.translateService.getBrowserLang() ?? 'en';
      this.storeLanguage(language);
    }

    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
    this.currentLanguage.next(language);
  }

  private storeLanguage(language: string) {
    this.storageService.setStorageValue(LANGUAGE_KEY, language);
  }

  private getStoredLanguage() {
    return this.storageService.getStorageValue(LANGUAGE_KEY);
  }

  switchLanguage() {
    const language = this.currentLanguage.value === 'en' ? 'ar' : 'en';
    this.translateService.use(language);
    this.currentLanguage.next(language);
    this.storeLanguage(language);
  }
}

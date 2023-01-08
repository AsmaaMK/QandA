import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './modules/angular-material.module';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeTogglerComponent,
    QuestionsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

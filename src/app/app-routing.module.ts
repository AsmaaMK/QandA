import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

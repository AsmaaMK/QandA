import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QAndAService } from 'src/app/services/q-and-a.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {

  questions!: Question[];

  constructor(private qAndAService: QAndAService) { }

  ngOnInit(): void {
    this.qAndAService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }

}

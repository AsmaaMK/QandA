import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QAndAService {
  constructor() {}

  getQuestions(): Observable<Question[]> {
    return new Observable<Question[]>((observer) => {
      observer.next([
        {
          id: 1,
          title: 'How to create a new Angular project?',
          description:
            'I am new to Angular and I want to create a new Angular project. Can anyone help me?',
          answers: [
            {
              id: 1,
              questionId: 1,
              description:
                'You can use the Angular CLI to create a new project.',
              answeredBy: 'John Doe',
              answeredOn: new Date(),
              votes: 0,
              accepted: false,
            },
          ],
          askedBy: 'Jane Doe',
          askedOn: new Date(),
          votes: 1,
          views: 10,
          tags: ['angular', 'cli'],
          hasAcceptedAnswer: false,
        },
        {
          id: 2,
          title: 'How to create a new Angular project?',
          description:
            'I am new to Angular and I want to create a new Angular project. Can anyone help me?',
          answers: [
            {
              id: 1,
              questionId: 1,
              description:
                'You can use the Angular CLI to create a new project.',
              answeredBy: 'John Doe',
              answeredOn: new Date(),
              votes: 0,
              accepted: true,
            },
          ],
          askedBy: 'Jane Doe',
          askedOn: new Date(),
          votes: -2,
          views: 20,
          tags: ['angular', 'cli'],
          hasAcceptedAnswer: true,
        },
        {
          id: 2,
          title: 'How to create a new Angular project?',
          description:
            'I am new to Angular and I want to create a new Angular project. Can anyone help me?',
          answers: [
            
          ],
          askedBy: 'Jane Doe',
          askedOn: new Date(),
          votes: 2,
          views: 20,
          tags: ['angular', 'cli'],
          hasAcceptedAnswer: true,
        },
      ]);
    });
  }
}

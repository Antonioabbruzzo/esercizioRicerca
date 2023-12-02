import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface IEmail {
  id: number;
  from: string;
  to: string;
  subject: string;
  message: string;
}

export class Email {
  id: number = 0;
  from: string = '';
  to: string = '';
  subject: string = '';
  message: string = '';

  constructor(e: IEmail) {
    this.id = e.id;
    this.from = e.from;
    this.to = e.to;
    this.subject = e.subject;
    this.message = e.message;
  }
}
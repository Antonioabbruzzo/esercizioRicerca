
import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { ITweet } from '../modules/interfaccia.model';
import { IEmail } from '../modules/email.model';
import { ISpesa } from '../modules/spese.model';

@Component({
  selector: 'app-ricerca-dati',
  templateUrl: './ricerca-dati.component.html',
  styleUrls: ['./ricerca-dati.component.scss']
})
export class RicercaDatiComponent implements OnInit {
  tweetList: ITweet[] = [];
  emailList: IEmail[] = [];
  spesaList: ISpesa[] = [];
  spesaCausual?: string;
  tweetId?: number;
  emailId?: number;
  showEmaIl?: IEmail;
  showTweet?: ITweet;
  showSpesa?: ISpesa;

  constructor(private tweetService: TweetService) { }
  ngOnInit(): void {
    this.getTweet();
    this.getEmail();
    this.getSpesa();
  }

  getTweet() {
    return this.tweetService.getTweet().subscribe({
      next: (list: any) => {
        this.tweetList = list;
        console.log(this.tweetList);

      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getEmail() {
    return this.tweetService.getEmail().subscribe({
      next: (email: any) => {
        this.emailList = email;
        console.log(this.emailList);

      }
    });
  }

  getSpesa() {
    return this.tweetService.getSpese().subscribe({
      next: (spesa: any) => {
        this.spesaList = spesa;
        console.log(this.spesaList);

      }
    });
  }

  findTweet(find: number) {
    this.tweetId = find;
    console.log(this.tweetId, 'id tweet');
    this.showTweet = this.tweetList.find(message => message.id === this.tweetId);
    console.log(this.showTweet);
  }

  findEmail(id: number) {
    this.emailId = id;
    this.showEmaIl = this.emailList.find(id => id.id === this.emailId);
  }

  findSpesa(causale: string) {
    this.spesaCausual = causale;
    this.showSpesa = this.spesaList.find(motivo => motivo.causal === this.spesaCausual);
  }

  save(formValue: any) {
    console.log(formValue);
  }
}

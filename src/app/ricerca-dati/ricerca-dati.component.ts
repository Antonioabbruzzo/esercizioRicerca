
import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { ITweet } from '../modules/interfaccia.model';
import { IEmail } from '../modules/email.model';
import { find } from 'rxjs';

@Component({
  selector: 'app-ricerca-dati',
  templateUrl: './ricerca-dati.component.html',
  styleUrls: ['./ricerca-dati.component.scss']
})
export class RicercaDatiComponent implements OnInit {
  tweetList: ITweet[] = [];
  emailList: IEmail[] = [];
  tweetId?: number;
  emailId?: number;
  showEmaIl?: IEmail;
  showTweet?: ITweet;

  constructor(private tweetService: TweetService) { }
  ngOnInit(): void {
    this.getTweet();
    this.getEmail();
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

  findTweet(find: number) {
    this.tweetId = find;
    console.log(this.tweetId);
    this.showTweet = this.tweetList.find(message => message.id === this.tweetId);
    console.log(this.showTweet);
  }

  findEmail(id: number) {
    this.emailId = id;
    this.showEmaIl = this.emailList.find(id => id.id === this.emailId);

  }

  save(formValue: any) {
    console.log(formValue);
  }
}

export interface ITweet {
  tweetId: any;
  id: number;
  author: string;
  tweet: string;
}

export class Tweet {
  id: number = 0;
  author: string = '';
  tweet: string = '';

  constructor(t: ITweet) {

    this.id = t.id;
    this.author = t.author;
    this.tweet = t.tweet;


  }
} 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  baseurl = 'https://1842bf46-0ebc-4c7c-93eb-39df5122531d.mock.pstmn.io/tweet';
  baseulrYT = 'https://1842bf46-0ebc-4c7c-93eb-39df5122531d.mock.pstmn.io/messages/inbox';

  constructor(private http: HttpClient) { }

  getTweet() {
    return this.http.get(this.baseurl);
  }

  getEmail() {
    return this.http.get(this.baseulrYT);
  }


}

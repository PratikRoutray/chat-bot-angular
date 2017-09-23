import { Component, Input, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Query } from '../util/query';
import { Keys } from '../util/keys';
import { Constants } from '../util/constants';
/**
 * MessageBotComponent
 */
@Component({
  selector: 'message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css']
})

@Injectable()
export class MessageBotComponent implements OnInit {
  title = 'app';
  name: string;
  /**
   * Dispaly System Query
   */
  systemQuery: string;
  /**
   * Read user query or answer
   */
  userQuery: string;
  @ViewChild('chatHistory') chatHistory;
  constructor(private http: Http, private elementRef: ElementRef, private renderer: Renderer2) {
    let obj;
    //this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }
  ngOnInit() {
    this.systemQuery = Query.Basic_Q1;
  }
  handleCommit(event) {
    if (event.keyCode === Keys.RETURN) {
      let chatElement = document.createElement('div');
      chatElement.innerHTML = this.userQuery;
      chatElement.innerText = this.userQuery;
      this.chatHistory.nativeElement.appendChild(chatElement);
      this.userQuery = Constants.EMPTY_STRING;
    }

  }
}

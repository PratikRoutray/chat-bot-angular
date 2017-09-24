import { Component, Input, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Query } from '../util/query';
import { Keys } from '../util/keys';
import { Constants } from '../util/constants';
import { UserQuery } from '../util/user-query';
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
    this.createSystemQueryInChatHistory(this.systemQuery);
  }
  handleCommit(event) {
    if (event.keyCode === Keys.RETURN) {
      this.createUserQueryInChatHistory();
      switch (this.systemQuery) {
        case Query.Basic_Q1:
          this.name = this.userQuery;
          this.systemQuery = Query.Basic_Q2;
          let chatSysQuery = 'Hello ' + this.name + ' ,' + Query.Basic_Q2;
          this.createSystemQueryInChatHistory(chatSysQuery);
          break;
        case Query.Basic_Q2:
          if (this.userQuery === UserQuery.Q1) {
            //Need to implement all the scenario's here

          } else {
            this.systemQuery = Query.Resopnse_Ans;
            this.createSystemQueryInChatHistory(this.systemQuery);
          }
          break;
        default:
          this.systemQuery = Query.Resopnse_Ans;
          this.createSystemQueryInChatHistory(this.systemQuery);
          break;

        // if (this.userQuery === )
      }
      this.userQuery = Constants.EMPTY_STRING;
    }
  }
  createSystemQueryInChatHistory(systemQuery) {
    let chatElementSys = document.createElement('div');
    chatElementSys.innerHTML = systemQuery;
    chatElementSys.innerText = systemQuery;
    chatElementSys.classList.add('rightAlign');
    this.chatHistory.nativeElement.appendChild(chatElementSys);
  }
  createUserQueryInChatHistory() {
    let chatElement = document.createElement('div');
    chatElement.innerHTML = this.userQuery;
    chatElement.innerText = this.userQuery;
    chatElement.classList.add('leftAlign');
    this.chatHistory.nativeElement.appendChild(chatElement);
  }
}

import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
 * MessageBotComponent
 */
@Component({
  selector: 'message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css']
})

@Injectable()
export class MessageBotComponent {
  title = 'app';

  constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getJSON(): Observable<string> {
         return this.http.get("./games.json")
                         .map((res:any) => res.json());

     }
     readData(event:any){
      const wel = 'Thank you for using this service';
     }
}


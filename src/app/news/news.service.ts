import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable(
{
    providedIn: 'root',}
)

export class NewsService {

    private key: string = 'db2b16940de24e8abf4bf566f91703c9';
    private newsURL: string = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey='+ this.key;

    constructor(private _http:HttpClient){}

    public getNewsFeed() : Observable<any>
    
    {
    return this._http.get(this.newsURL);
    // .map((res:Response) => res.json())
    }

}
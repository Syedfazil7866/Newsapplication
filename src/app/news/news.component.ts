import {Component} from '@angular/core';
import { NewsService } from './news.service';


@Component({
    selector:'my-news',
    templateUrl:'./news.component.html',
    styleUrls:['./news.component.css']
})

export class NewsComponent{

    public newsData: [] = [];
    private showNewsFeed: boolean = false; 
    constructor(private newsService: NewsService )
    {
    this.newsService.getNewsFeed().subscribe((data: any)=>{
            console.log('data',data);
            this.newsData = data.articles;
            this.showNewsFeed = true;
    })
        // console.log('data', this.newsData);
    }
}
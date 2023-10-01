import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: any = '';
  constructor(
    private _quotesService: MyServiceService
  ) { }

  ngOnInit(): void {
    this._quotesService.getQuotes().subscribe(response=>{
      console.log(response);
      this.quotes = response;
    });
  }
}
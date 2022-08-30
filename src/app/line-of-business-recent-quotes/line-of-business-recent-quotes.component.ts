import { Component, OnInit } from '@angular/core';
import {LineOfBusinessService} from '../lineOfBusiness.service';
import { Quote } from '../Quote';
import {LineOfBusiness} from '../LineOfBusiness';

@Component({
  selector: 'app-line-of-business-recent-quotes',
  templateUrl: './line-of-business-recent-quotes.component.html',
  styleUrls: ['./line-of-business-recent-quotes.component.css']
})
export class LineOfBusinessRecentQuotesComponent implements OnInit {
  recentQuotes!: Quote[];
  linesOfBusiness!: LineOfBusiness[];
  numberOfQuotesDisplayed = 5;
  constructor(private lineOfBusinessService: LineOfBusinessService) {
  }

  ngOnInit(): void {
    this.getRecentQuotes();
    this.lineOfBusinessService.getLinesOfBusiness()
      .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness);
  }
  getRecentQuotes(): void {
    this.lineOfBusinessService.getRecentQuotes()
      .subscribe(recentQuotes => this.recentQuotes = recentQuotes);
  }

  getLineOfService(id: number){
    const lineOfBusiness = this.linesOfBusiness.find(line => line.id === id)!;
    return lineOfBusiness;
  }

}

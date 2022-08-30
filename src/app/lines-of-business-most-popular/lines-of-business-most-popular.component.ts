import {Component, Input, OnInit} from '@angular/core';
import {InMemoryDataService} from '../in-memory-data.service';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { countBy, orderBy, take } from 'lodash';

import {Quote} from '../Quote';
@Component({
  selector: 'app-lines-of-business-most-popular',
  templateUrl: './lines-of-business-most-popular.component.html',
  styleUrls: ['./lines-of-business-most-popular.component.css']
})
export class LinesOfBusinessMostPopularComponent implements OnInit {
  linesOfBusiness: LineOfBusiness[] = [];
  recentQuotes: Quote[] = [];
  constructor(private lineOfBusinessService: LineOfBusinessService) { }
  ngOnInit(): void {
    this.getLinesOfBusiness();
    this.getRecentQuotes();
  }
  getLinesOfBusiness(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
      .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness);
  }
  getRecentQuotes(): void {
    this.lineOfBusinessService.getRecentQuotes()
      .subscribe(recentQuotes => this.recentQuotes = recentQuotes);
  }
  get popularLinesOfBusiness(): LineOfBusiness[] {
    const quoteCounts = countBy(
      this.recentQuotes,
      quote => quote.lineOfBusiness
    );
    const res = [...
      this.recentQuotes.reduce((Map, { lineOfBusiness }) => {
        if (Map.has(lineOfBusiness)) {
          Map.get(lineOfBusiness).count++;
        } else {
          Map.set(lineOfBusiness, {lineOfBusiness, count: 1});
        }
        return Map;
      }, new Map())
        .values()
    ];
    const topCounts = orderBy(res, 'count', 'desc');
    const topLines = take(topCounts, 2).map(x => this.linesOfBusiness.find(line => line.id === x.lineOfBusiness) || ({
        id: 0,
        name: 'Not Found',
        description: 'Not Found',
      } as LineOfBusiness)


    );
    return topLines;
  }





}

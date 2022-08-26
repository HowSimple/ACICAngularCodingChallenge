import {Component, Input, OnInit} from '@angular/core';
import {InMemoryDataService} from '../in-memory-data.service';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';
@Component({
  selector: 'app-lines-of-business-most-popular',
  templateUrl: './lines-of-business-most-popular.component.html',
  styleUrls: ['./lines-of-business-most-popular.component.css']
})
export class LinesOfBusinessMostPopularComponent implements OnInit {
  popularLinesOfBusiness: LineOfBusiness[] = [];
  constructor(private lineOfBusinessService: LineOfBusinessService) { }
  ngOnInit(): void {
  }
  getPopularLinesOfBusiness(): void {
    this.lineOfBusinessService.getPopularLinesOfBusiness()
      .subscribe(popularLines => this.popularLinesOfBusiness = popularLines);
  }

}

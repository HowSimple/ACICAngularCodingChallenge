import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  linesOfBusiness: LineOfBusiness[] = [];
  popularLinesOfBusiness: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) { }

  ngOnInit() {
    this.getLinesOfBusiness();
  }

  getLinesOfBusiness(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
      .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness.slice(1, 4));
  }
  getPopularLinesOfBusiness(): void {
    this.lineOfBusinessService.getPopularLinesOfBusiness()
      .subscribe(popularLinesOfBusiness => this.popularLinesOfBusiness = popularLinesOfBusiness.slice(1, 4));
  }
}

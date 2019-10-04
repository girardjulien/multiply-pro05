import { Component, OnInit } from '@angular/core';
import { MultiplyService } from '../multiply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  score: number = 0;

  constructor(public multiplyS: MultiplyService, public router: Router) { }

  ngOnInit() {
    if (this.multiplyS.results.length == 0) this.router.navigate(['/multiply/0']);
    this.multiplyS.results.forEach(element => {
      if (element.booleanResult) {
        this.score += 1;
      }
    });
     
  }

}

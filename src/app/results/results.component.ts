import { Component, OnInit } from '@angular/core';
import { MultiplyService } from '../multiply.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public multiplyS: MultiplyService) { }

  ngOnInit() {
  }

}

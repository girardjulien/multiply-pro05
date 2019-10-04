import { Component } from '@angular/core';
import { MultiplyService } from './multiply.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-multiply';

  constructor(public multiplyS: MultiplyService) {
    
  }
}

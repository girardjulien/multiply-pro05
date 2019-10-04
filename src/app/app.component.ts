import { Component } from '@angular/core';
import { MultiplyService } from './multiply.service';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-multiply';
  player: Player;

  constructor(public multiplyS: MultiplyService) {
    this.player = new Player('test@test.fr', 'motdepasse');
  }
}

import { Component } from '@angular/core';
import { TitleService} from "../common/services/titleService/title.service";

@Component({
  selector: '[app-root]',
  providers: [TitleService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  ngOnInit():void {}
}

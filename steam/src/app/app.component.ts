import {Component} from "@angular/core";
import { Title } from "@angular/platform-browser";
import {AppService} from "../common/services/appService/app.service";

@Component({
  selector: '[app-root]',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private appService: AppService, private titleService: Title) { }

  ngOnInit():void {
    this.title = this.appService.getTitle();
    this.titleService.setTitle(this.title);
  }
}

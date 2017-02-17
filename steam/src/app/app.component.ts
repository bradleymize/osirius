import {Component, AfterViewInit, ViewChildren, ElementRef} from "@angular/core";
import { Title } from "@angular/platform-browser";
import {AppService} from "../common/services/appService/app.service";

@Component({
  selector: '[app-root]',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // 1. Not sure I need ref-someSelector in the html (not doing anything with input here)
  // 2. Can use click binding to trigger something based on input values (should be bound to
  //    ngModel so I should be able to access it somehow
  @ViewChildren("someSelector") input: ElementRef;
  title: string;

  constructor(private appService: AppService, private titleService: Title) { }

  ngAfterViewInit():void {
    console.log(this.input)
  }

  doSomething():void {
    console.log("You have entered: '" + this.title + "'");
  }

  ngOnInit():void {
    this.title = this.appService.getTitle();
    this.titleService.setTitle(this.title);
  }
}

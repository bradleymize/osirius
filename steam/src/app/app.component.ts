import {Component, AfterViewInit, ViewChildren} from "@angular/core";
import {AppService} from "../common/services/appService/app.service";
import {ElementRef} from "@angular/core";

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren("someSelector") input: ElementRef;
  title: string;

  constructor(private appService: AppService) { }

  ngAfterViewInit():void {
    console.log(this.input)
  }

  ngOnInit():void {
    this.title = this.appService.getTitle();
  }
}

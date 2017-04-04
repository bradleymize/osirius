import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  private title: string = "Home";
  getTitle():string {
    return this.title;
  }
  setTitle(title: string):void {
    this.title = title;
  }
}

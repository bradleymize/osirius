import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private title: string = "Test Header";
  getTitle():string {
    return this.title;
  }
  setTitle(title: string):void {
    this.title = title;
  }
}

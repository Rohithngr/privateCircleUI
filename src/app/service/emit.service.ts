import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmitService {
  private seachValue = new Subject<any>()
  constructor() { }

  getSearchValue = this.seachValue.asObservable();

  sendSearchValue(data:any){
    this.seachValue.next(data)
  }
}

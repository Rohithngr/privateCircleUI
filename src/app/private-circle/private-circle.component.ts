import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitService } from '../service/emit.service';
@Component({
  selector: 'app-private-circle',
  templateUrl: './private-circle.component.html',
  styleUrls: ['./private-circle.component.css']
})
export class PrivateCircleComponent implements OnInit {

  value:any
  constructor(private router:Router, private emit:EmitService) { }

  ngOnInit(): void {
  }
  moveTo(event:any){
    console.log(event);
    if(event.index==0){
      this.router.navigate(['/private-circle/saved'])
    }
    else if(event.index==1){
      this.router.navigate(['/private-circle/filter'])
    }
    else if(event.index==2){
      this.router.navigate(['/private-circle/history'])
    }
    
  }
  search(event:any){
    // console.log(event.target.value);
    this.emit.sendSearchValue(event.target.value)
    
  }

}

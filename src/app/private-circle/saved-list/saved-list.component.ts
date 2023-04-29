import { Component, OnInit } from '@angular/core';
import { EmitService } from 'src/app/service/emit.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {
  selectedBtn:any
  showDetail:boolean=false
  details:any=[
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
    "Infosys Limited",
]
  constructor(private emit:EmitService) { 
  
  }

  ngOnInit(): void {
    this.emit.getSearchValue.subscribe(
      (resp:any)=>{
        console.log(resp);
        this.dataSource.filter = resp;
      }
    )
  }
  displayedColumns: string[] = ['date', 'list_name', 'no_of_entities', 'action','details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  onSelectedButton(index:any,details:any){
    this.selectedBtn=index;
    if(details==1){
      this.showDetail=true
    }
    else{
      this.showDetail=false
    }
}
}
export interface PeriodicElement {
  list_name: string;
  date: number;
  details: number;
  no_of_entities: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1, list_name: 'Hydrogen', no_of_entities: 1.0079, details:0,action: 'H'},
  {date: 2, list_name: 'Helium', no_of_entities: 4.0026, details:1,action: 'He'},
  {date: 3, list_name: 'Lithium', no_of_entities: 6.941, details:1,action: 'Li'},
  {date: 4, list_name: 'Beryllium', no_of_entities: 9.0122, details:1,action: 'Be'},
  {date: 5, list_name: 'Boron', no_of_entities: 10.811, details:0,action: 'B'},
  {date: 6, list_name: 'Carbon', no_of_entities: 12.0107, details:1,action: 'C'},
  {date: 7, list_name: 'Nitrogen', no_of_entities: 14.0067, details:1,action: 'N'},
  {date: 8, list_name: 'Oxygen', no_of_entities: 15.9994, details:0,action: 'O'},
  {date: 9, list_name: 'Fluorine', no_of_entities: 18.9984, details:1,action: 'F'},
  {date: 10, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 11, list_name: 'Neon', no_of_entities: 20.1797, details:0,action: 'Ne'},
  {date: 12, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 13, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 14, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 15, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 16, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 17, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
  {date: 18, list_name: 'Neon', no_of_entities: 20.1797, details:1,action: 'Ne'},
];

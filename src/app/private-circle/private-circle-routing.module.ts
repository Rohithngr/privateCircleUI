import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateCircleComponent } from './private-circle.component';
import { SavedListComponent } from './saved-list/saved-list.component';
import { FilterComponent } from './filter/filter.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path:'', component:PrivateCircleComponent, children:[
      {
        path:'saved', component:SavedListComponent
      },
      {
        path:'', redirectTo:'saved', pathMatch:'full'
      },
      {
        path:'filter', component:FilterComponent
      },
      {
        path:'history', component:HistoryComponent
      }
    ] 
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateCircleRoutingModule { }

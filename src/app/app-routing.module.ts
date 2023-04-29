import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'private-circle',
    loadChildren:()=> import('./private-circle/private-circle.module').then(m => m.PrivateCircleModule)
  },
  {
    path:'',
    redirectTo:'private-circle',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

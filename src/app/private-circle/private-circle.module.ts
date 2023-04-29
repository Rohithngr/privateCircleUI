import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateCircleRoutingModule } from './private-circle-routing.module';
import { PrivateCircleComponent } from './private-circle.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { SavedListComponent } from './saved-list/saved-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterComponent } from './filter/filter.component';
import { HistoryComponent } from './history/history.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PrivateCircleComponent,
    SavedListComponent,
    FilterComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    PrivateCircleRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class PrivateCircleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdusenRoutingModule } from './produsen-routing.module';
import { ListProdusenComponent } from './list-produsen/list-produsen.component';
import { FormProdusenComponent } from './form-produsen/form-produsen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListProdusenComponent,
    FormProdusenComponent,
  ],
  imports: [
    CommonModule,
    ProdusenRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ProdusenModule { }

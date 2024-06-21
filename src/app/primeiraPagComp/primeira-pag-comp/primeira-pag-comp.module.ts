import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiraPagCompPageRoutingModule } from './primeira-pag-comp-routing.module';

import { PrimeiraPagCompPage } from './primeira-pag-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiraPagCompPageRoutingModule
  ],
  declarations: [PrimeiraPagCompPage]
})
export class PrimeiraPagCompPageModule {}

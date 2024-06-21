import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaPagCompPageRoutingModule } from './segunda-pag-comp-routing.module';

import { SegundaPagCompPage } from './segunda-pag-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundaPagCompPageRoutingModule
  ],
  declarations: [SegundaPagCompPage]
})
export class SegundaPagCompPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermaisPageRoutingModule } from './vermais-routing.module';

import { VermaisPage } from './vermais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VermaisPageRoutingModule
  ],
  declarations: [VermaisPage]
})
export class VermaisPageModule {}

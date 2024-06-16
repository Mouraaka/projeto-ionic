import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermaisPage } from './vermais.page';

const routes: Routes = [
  {
    path: '',
    component: VermaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermaisPageRoutingModule {}

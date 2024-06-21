import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundaPagCompPage } from './segunda-pag-comp.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaPagCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundaPagCompPageRoutingModule {}

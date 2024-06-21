import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiraPagCompPage } from './primeira-pag-comp.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiraPagCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiraPagCompPageRoutingModule {}

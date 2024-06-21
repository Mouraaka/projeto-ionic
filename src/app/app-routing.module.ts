import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'vermais/:id',
    loadChildren: () => import('./vermais/vermais/vermais.module').then( m => m.VermaisPageModule)
  },
  {
    path: 'integrantes',
    loadChildren: () => import('./integrantes/integrantes/integrantes.module').then( m => m.IntegrantesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./resgister/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./startpage/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'primeira-pag-comp',
    loadChildren: () => import('./primeiraPagComp/primeira-pag-comp/primeira-pag-comp.module').then( m => m.PrimeiraPagCompPageModule)
  },
  {
    path: 'segunda-pag-comp',
    loadChildren: () => import('./segundaPagComp/segunda-pag-comp/segunda-pag-comp.module').then( m => m.SegundaPagCompPageModule)
  },
  {
    path: 'comparar',
    loadChildren: () => import('./comparar/comparar/comparar.module').then( m => m.CompararPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

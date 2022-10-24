import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path : '',
  loadChildren : () => import('./personaje/listar/listar.module').then(m => m.ListarPageModule)
  },
  {
    path : 'agregar',
    loadChildren : () => import('./personaje/agregar/agregar.module').then(m => m.AgregarPageModule)
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

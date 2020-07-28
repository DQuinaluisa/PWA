import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear', pathMatch: 'full' },
  { path: 'crear', component: CrearComponent },
  { path: 'ver', loadChildren: () => import('./ver/ver.module').then(m => m.VerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

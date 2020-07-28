import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerComponent } from './ver.component';

const routes: Routes = [
  { path: '', component: VerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerRoutingModule { }

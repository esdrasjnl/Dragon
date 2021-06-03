import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IDEComponent } from './components/ide/ide.component';

const routes: Routes = [
  {
    path: 'Dragon',
    component: IDEComponent,
  }
  /*,
  {
    path: 'Usuario',
    component: ModificarUsuarioComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

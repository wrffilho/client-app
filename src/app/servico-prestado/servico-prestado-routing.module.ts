import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


const routes: Routes = [
  {
    path: 'servicos-prestados', component: LayoutComponent, children:
      [
        { path: 'form', component: ServicoPrestadoFormComponent },
        { path: 'listagem', component: ServicoPrestadoListaComponent },
        { path: '', redirectTo: '/servicos-prestados/listagem', pathMatch: 'full' }

      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }

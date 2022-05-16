import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard], children:
      [
        { path: 'form', component: ClientesFormComponent,  },
        { path: 'form/:id', component: ClientesFormComponent },
        { path: 'list', component: ClientesListaComponent },
        { path: '', redirectTo:'/clientes/list', pathMatch:'full' },
      ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

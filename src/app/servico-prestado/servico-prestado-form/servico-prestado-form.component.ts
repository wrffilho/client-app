import {ServicoPrestadoService} from './../../services/servico-prestado.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';



@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response );
  }

  onSubmit(){
    console.log(this.servico);
    
    this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
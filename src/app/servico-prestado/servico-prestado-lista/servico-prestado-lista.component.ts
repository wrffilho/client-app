import {ServicoPrestadoBusca} from './ServicoPrestadoBusca';
import {ServicoPrestadoService} from './../../services/servico-prestado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  name: string;
  month: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];
  message: string;

  constructor(
    private service: ServicoPrestadoService
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.name, this.month)
      .subscribe(response => {
        this.lista = response;
        console.log(this.lista);
        
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }

}

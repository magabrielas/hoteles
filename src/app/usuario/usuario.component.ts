import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren,OnInit} from '@angular/core';
import {Observable} from 'rxjs';

 import {Usuario} from '../Modelo/usuario';
 import {UsuarioService} from '../usuario.service';
 import {SortableDirective, SortEvent} from '../sortable.directive';

import { faPlusCircle, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  providers: [UsuarioService, DecimalPipe]

})
export class UsuarioComponent implements OnInit  {
  /*Para usar los iconos de fontawesome*/
  faPlusCircle=faPlusCircle; 
  faEdit=faEdit;
  faTrashAlt = faTrashAlt;


  usuarios$: Observable<Usuario[]>;
  total$: Observable<number>;
  user : Usuario[]=[];

@ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(private service: UsuarioService) {
    this.usuarios$ = service.usuarios$;
    this.total$ = service.total$;
    
  }
  
ngOnInit(): void {
   
  }

onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}//fin de la clase


/*
VER SI ESTA TRAYENDO EL JSON, COLOCARLO EN ONINIT

 this.service.getData().subscribe(
      response => {
        alert("Response");
        console.log(response);
      },
      error => {
        alert("Error");
        console.log(error);
      }
    );

    this.service.getData().subscribe(data=>{
      this.user=data
      console.log(data);
    });
    */
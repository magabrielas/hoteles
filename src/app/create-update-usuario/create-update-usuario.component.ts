import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Usuario} from '../Modelo/usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-create-update-usuario',
  templateUrl: './create-update-usuario.component.html',
  styleUrls: ['./create-update-usuario.component.css']
})
export class CreateUpdateUsuarioComponent implements OnInit {

  constructor(
    public service: UsuarioService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }

	}//FIN DEL getDismissReason

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; // Aqui se importa para usar la directiva *Ng

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import {DecimalPipe} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';//PARA PODER USAR BOOTSTRAP COMPONENT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { PaisComponent } from './pais/pais.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SortableDirective } from './sortable.directive';
import { CreateUpdatePaisComponent } from './create-update-pais/create-update-pais.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { CreateUpdateUsuarioComponent } from './create-update-usuario/create-update-usuario.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    ModalLoginComponent,
    NgbCarouselComponent,
    LoginComponent,
    UsuarioComponent,
    SortableDirective,
    CreateUpdatePaisComponent,
    DeleteModalComponent,
    CreateUpdateUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false }),
    NgbModule,
    FontAwesomeModule,
  ],
  entryComponents : [
  ModalLoginComponent,
  CreateUpdatePaisComponent,
  CreateUpdateUsuarioComponent,
  DeleteModalComponent
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { SharedDadosService } from '../../services/shared-dados.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
toggleMenu() {
throw new Error('Method not implemented.');
}

  inputValue: string = "";
  constructor(private sharedDados: SharedDadosService) {

  }
   interacaoBarraLateral() {
    const bnt = document.getElementById('btn-menu');
    let menu = document.getElementById('div-menu-lateral');
    const overlay = document.getElementById('overlay-menu-lateral');

    bnt?.addEventListener('click', () => {
      menu?.classList.add('abrir-menu');
    })
  }
  getInput() {
    this.sharedDados.setData(this.inputValue);

  }
}

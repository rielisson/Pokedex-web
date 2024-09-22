import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor() {

  }
   interacaoBarraLateral() {
    const bnt = document.getElementById('btn-menu');
    let menu = document.getElementById('div-menu-lateral');
    const overlay = document.getElementById('overlay-menu-lateral');

    bnt?.addEventListener('click', () => {
      menu?.classList.add('abrir-menu');
    })
  }
}

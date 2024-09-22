import { Component, OnInit } from '@angular/core';
import { DadosPokemonsService } from '../../services/dados-pokemons.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  pokemons: any[] = [];
  constructor (private dadosPokemons: DadosPokemonsService) {}
  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.dadosPokemons.getPokemons().subscribe
    (data => {
      console.log(data);
      data.results.forEach((pokemons: any) => {
        this.dadosPokemons.getDadosPokemon(pokemons.name).subscribe
        (dadosPokemon => {
          this.pokemons.push(dadosPokemon);
          console.log(this.pokemons);
        })
      });
      });
  }

}


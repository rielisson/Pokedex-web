import { Component, OnInit } from '@angular/core';
import { DadosPokemonsService } from '../../services/dados-pokemons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  page: number = 1;
  pokemons: any[] = [];
  pageSize: number = 24;
  totalPokemons: number = 100;
  pokemonModal: any = null;
  corPokemon: any;
  testeCor: any;
  constructor (
    private dadosPokemons: DadosPokemonsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    const offset = (this.page -1) * this.pageSize;
    this.dadosPokemons.getPokemons(this.pageSize,offset).subscribe
    (data => {
      data.results.forEach((pokemons: any) => {
        this.dadosPokemons.getDadosPokemon(pokemons.name).subscribe
        (dadosPokemon => {
          this.pokemons.push(dadosPokemon);
        })
      });
    });
  }
  onPageChange(page:number) {
    this.page = page;
    this.getPokemons();
  }
  openModal(content: any, pokemon: any) {
    this.dadosPokemons.getCorPokemons(pokemon.name).subscribe
        (corPokemons => {
          this.corPokemon = corPokemons.color.name;
          console.log(this.corPokemon);
        })
    this.pokemonModal = pokemon
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }


}


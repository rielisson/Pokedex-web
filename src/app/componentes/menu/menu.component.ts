import { Component, OnInit } from '@angular/core';
import { DadosPokemonsService } from '../../services/dados-pokemons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedDadosService } from '../../services/shared-dados.service';

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
  inputValue: any;
  pokemonPesquisa: any;

  constructor (
    private dadosPokemons: DadosPokemonsService,
    private modalService: NgbModal,
    private sharedDado: SharedDadosService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getInputValue();
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

  getInputValue() {
    this.sharedDado.data$.subscribe((newData) => {
      console.log(newData);
      this.inputValue = newData;
      this.filterPokemons();
    })
  }

  filterPokemons() {
    if (!this.inputValue) {
      this.pokemonPesquisa = this.pokemons;
      console.log(this.pokemons);
      return;
    }

    this.pokemonPesquisa = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.inputValue.toLowerCase())
    );

  }
  getDados() {
    this.dadosPokemons.getApi().subscribe
    (data => {
      console.log(data);
    })
  }
}


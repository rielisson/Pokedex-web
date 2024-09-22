import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosPokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor(private https: HttpClient) { }

  getPokemons(limit: number = 50, offset: number = 0): Observable<PokemonInterface> {
    return this.https.get<PokemonInterface>(`${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`);
  }
  getDadosPokemon(name: any) {
    return this.https.get(`${this.apiUrl}pokemon/${name}`)
  }
}
interface PokemonInterface {
  count: number;
  next: string;
  previous: string;
  results: Array<{name: string,url: string }>
}

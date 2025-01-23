import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDadosService {
  private dataSubject = new BehaviorSubject<string>('');
  data$ = this.dataSubject.asObservable();

  setData(newData: string) {
    this.dataSubject.next(newData);
  }

}

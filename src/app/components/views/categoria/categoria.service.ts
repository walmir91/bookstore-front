import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { } //importando snackBar
  
findAll(): Observable<Categoria[]>{
  const url = `${this.baseUrl}/categorias`
  return this.http.get<Categoria[]>(url)
}//Método para apresentar em tela todas as categorias já criadas.

create(categoria: Categoria): Observable<Categoria>{
  const url = `${this.baseUrl}/categorias`
  return this.http.post<Categoria>(url, categoria);
} // Método para criação de nova Categoria.

mensagem(str: String): void{
  this._snack.open(`${str}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
  })
}

}

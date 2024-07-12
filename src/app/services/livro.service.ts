import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro'
import { environment } from '../../environments/environment';
import { application } from 'express';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Livro[]>{
    return this.http.get<Livro[]>('${this.baseUrl}GetAllLivroFunction');
  }
  
  create(livro: Livro): Observable<string> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>('${this.baseUrl}InsertLivroFunction', livro, { headers, responseType: 'text' as 'json' });
  }

   getLivroById(id: string): Observable<Livro> { 
    return this.http.get<Livro>('${this.baseUrl}GetLivroFunction', {params:{id}});
  }

  deleteLivro(id: string): Observable<string>{
    return this.http.delete('${this.baseUrl}livro/${id}', { responseType: 'text' });
  }
}
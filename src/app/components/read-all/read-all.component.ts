import { Component } from '@angular/core';
import {MatCardModule}from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Livro} from '../../models/livro';
import { LivroService } from '../../services/livro.service';
import { response } from 'express';


@Component({
 selector: 'app-read-all',
 standalone: true,
 imports: [MatCardModule, MatButtonModule,CommonModule,RouterModule],
 templateUrl:'./read-all.component.html',
 styleUrls:['./read-all.component.css']
})

export class ReadAllComponent {
    list: Livro[] = [];
    constructor(private livroService: LivroService) { }
    ngOnInit(): void {
        this.livroService.findAll().subscribe (livros => {
            this.list = livros;
        });

    }

    deleteLivro(id: string | undefined): void{
    
        if (id) {
            this.livroService.deleteLivro(id).subscribe({

                next: (response) => {
                    
                    this.list = this.list.filter(livro => livro.id !== id);
                    console.log('livro apagado', response);
                },
                error: (err) => {
                    console.error('erro a apagar o livro', err)
                }
            });
        } else {
            console.error('id do livro n foi defenido');
        }
}

}
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup } from '@angular/forms';

import { Router,RouterModule,ActivatedRoute } from '@angular/router';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro.service';
import { v4 as uuidv4 } from 'uuid';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatInputModule,MatButtonModule,CommonModule,ReactiveFormsModule,RouterModule
  ],
  

  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private livroService: LivroService // Inject LivroService here
  ) {
    this.form = this.fb.group({
      book_id: [''],
      title: [''],
      author: [''],
      genre: ['']
    });
  }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.livroService.getLivroById(id).subscribe({
      next: (livro) => {
        this.form.patchValue(livro);
      },
      error: (err) => {
        console.error('Erro ao obter o carro:',err);
      }

    })
  }
}

  onSubmit() {

    if (this.form.valid) {
  
      const livro: Livro = this.form.value;
      this.livroService.create(livro).subscribe({
        next: (response) => {
          console.log('livro atualizado', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('erro ao atualizar livro', error);
          
        }

      });

}

  }



  onCancel() {
    this.router.navigate(['/']);
  }
}
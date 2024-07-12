import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private livroService: LivroService // Inject LivroService here
  ) {
    this.form = this.fb.group({
      book_id: [''],
      title: [''],
      author: [''],
      genre: ['']
    });
  }

  onSubmit() {
    let novoLivro: Livro = this.form.value;
    novoLivro.id = uuidv4();
    console.log(novoLivro);

    this.livroService.create(novoLivro).subscribe(response => {
      console.log('Resposta da API:', response);
      this.router.navigate(['/']);
    });
  }

  onCancel() {
    console.log(this.form.value);
  }
}
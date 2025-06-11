import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  templateUrl: './recipe-form.html',
  styleUrls: ['./recipe-form.css'],
  imports: [ReactiveFormsModule, NgIf],
})
export class RecipeForm implements OnInit {
  recipeForm: FormGroup;
  categorias = ['Doce', 'Salgado', 'Bebida', 'Outro'];
  editando = false;
  receitaId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempoPreparo: ['', Validators.required],
      categoria: ['', Validators.required],
      imagemUrl: [''],
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.editando = true;
      this.receitaId = +idParam;
      const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');
      const receita = receitas[this.receitaId];

      if (receita) {
        this.recipeForm.patchValue(receita);
      } else {
        alert('Receita não encontrada.');
        this.router.navigate(['/recipes']);
      }
    }
  }

  salvarReceita() {
    if (this.recipeForm.valid) {
      const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');

      if (this.editando) {
        receitas[this.receitaId] = this.recipeForm.value;
      } else {
        receitas.push(this.recipeForm.value);
      }

      localStorage.setItem('receitas', JSON.stringify(receitas));

      const mensagem = this.editando ? 'Receita atualizada com sucesso!' : 'Receita cadastrada com sucesso!';
      alert(mensagem);

      this.router.navigate(['/recipes']);
    }
  }

  cancelar() {
    this.router.navigate(['/recipes']);
  }
}

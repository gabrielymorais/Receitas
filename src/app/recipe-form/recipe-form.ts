import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  templateUrl: './recipe-form.html',
  styleUrls: ['./recipe-form.css'],
  imports: [ReactiveFormsModule, CommonModule, Modal],
})
export class RecipeForm implements OnInit {
  recipeForm: FormGroup;
  categorias = ['Doce', 'Salgado', 'Bebida', 'Outro'];
  editando = false;
  receitaId!: number;

  showConfirmModal = false;
  showSuccessModal = false;
  mensagemSucesso = '';
  previewImagem: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempoPreparo: ['', [Validators.required, Validators.min(1)]],
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
        this.previewImagem = receita.imagemUrl;
      } else {
        this.mensagemSucesso = 'Receita não encontrada.';
        this.showSuccessModal = true;
      }
    }
  }

  salvarReceita() {
    if (this.recipeForm.valid) {
      this.showConfirmModal = true;
    }
  }

  confirmarSalvar(confirmado: boolean) {
    this.showConfirmModal = false;

    if (confirmado) {
      const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');

      if (this.editando) {
        receitas[this.receitaId] = this.recipeForm.value;
      } else {
        receitas.push(this.recipeForm.value);
      }

      localStorage.setItem('receitas', JSON.stringify(receitas));

      this.mensagemSucesso = this.editando
        ? 'Receita atualizada com sucesso!'
        : 'Receita cadastrada com sucesso!';

      this.showSuccessModal = true;
    }
  }

  fecharModalSucesso() {
    this.showSuccessModal = false;
    this.router.navigate(['/recipes']);
  }

  cancelar() {
    this.router.navigate(['/recipes']);
  }

  onImagemSelecionada(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImagem = reader.result as string;
        this.recipeForm.patchValue({ imagemUrl: this.previewImagem });
      };
      reader.readAsDataURL(file);
    }
  }

  atualizarPreviewPorUrl() {
    const url = this.recipeForm.get('imagemUrl')?.value;
    this.previewImagem = url;
  }
}

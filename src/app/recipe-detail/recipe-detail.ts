import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
  imports: [NgIf, Modal],
})
export class RecipeDetail implements OnInit {
  receita: any;
  receitaId!: number;

  showConfirmModal = false;
  showSuccessModal = false;
  mensagemModal = '';

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.receitaId = Number(this.route.snapshot.paramMap.get('id'));
    const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.receita = receitas[this.receitaId];

    if (!this.receita) {
      this.mensagemModal = 'Receita não encontrada!';
      this.showSuccessModal = true;
    }
  }

  editar() {
    this.router.navigate(['/recipes', this.receitaId, 'edit']);
  }

  excluir() {
    this.showConfirmModal = true;
  }

  confirmarExclusao(confirmado: boolean) {
    this.showConfirmModal = false;

    if (confirmado) {
      const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');
      receitas.splice(this.receitaId, 1);
      localStorage.setItem('receitas', JSON.stringify(receitas));

      this.mensagemModal = 'Receita excluída com sucesso!';
      this.showSuccessModal = true;
    }
  }

  fecharModalSucesso() {
    this.showSuccessModal = false;
    this.router.navigate(['/recipes']);
  }
}

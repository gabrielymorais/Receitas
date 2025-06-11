import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
  imports: [NgIf],
})
export class RecipeDetail implements OnInit {
  receita: any;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.receita = receitas[id];

    if (!this.receita) {
      alert('Receita não encontrada!');
      this.router.navigate(['/recipes']);
    }
  }

  editar() {
  this.router.navigate(['/recipes', this.route.snapshot.paramMap.get('id'), 'edit']);
}
  excluir() {
    const confirmar = confirm('Tem certeza que deseja excluir esta receita?');

    if (confirmar) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');

      receitas.splice(id, 1); // Remove do array
      localStorage.setItem('receitas', JSON.stringify(receitas)); // Atualiza

      alert('Receita excluída com sucesso!');
      this.router.navigate(['/recipes']);
    }
  }
}

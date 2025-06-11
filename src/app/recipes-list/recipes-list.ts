import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  templateUrl: './recipes-list.html',
  styleUrls: ['./recipes-list.css'],
  imports: [NgFor, NgIf, FormsModule]
})
export class RecipesList implements OnInit {
  receitas: any[] = [];
  receitasFiltradas: any[] = [];
  categorias: string[] = ['Todas', 'Doce', 'Salgado', 'Bebida', 'Outro'];
  filtroCategoria: string = 'Todas';
  buscaNome: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('receitas');
    this.receitas = data ? JSON.parse(data) : [];
    this.receitasFiltradas = [...this.receitas];
  }

  verDetalhe(index: number) {
    this.router.navigate(['/recipes', index]);
  }

  filtrar() {
    this.receitasFiltradas = this.receitas.filter(receita => {
      const categoriaOk = this.filtroCategoria === 'Todas' || receita.categoria === this.filtroCategoria;
      const nomeOk = receita.nome.toLowerCase().includes(this.buscaNome.toLowerCase());
      return categoriaOk && nomeOk;
    });
  }
  novoCadastro() {
  this.router.navigate(['/recipes/new']);
}
}

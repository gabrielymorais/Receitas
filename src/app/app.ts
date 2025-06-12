import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, NgClass]
})
export class App implements OnInit {
  temaEscuro = false;

  ngOnInit(): void {
    const dark = localStorage.getItem('modo-escuro');
    this.temaEscuro = dark === 'true';

    if (this.temaEscuro) {
      document.body.classList.add('dark-mode');
    }
  }

  alternarTema() {
    this.temaEscuro = !this.temaEscuro;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('modo-escuro', this.temaEscuro.toString());
  }
}

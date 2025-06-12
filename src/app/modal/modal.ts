import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class Modal {
  @Input() titulo = 'Aviso';
  @Input() mensagem = '';
  @Input() podeCancelar = true;

  @Output() confirmado = new EventEmitter<boolean>();

  fechar(confirmado: boolean) {
    this.confirmado.emit(confirmado);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saluda-a',
  template: `Hola {{name}}
              <button (click)="confirmRead()">Message readed!!</button>`,
  styleUrls: ['./saluda-a.component.css']
})
export class SaludaAComponent implements OnInit {

  @Input() name: string;
  @Output() readed = new EventEmitter<string>();

  confirmRead = function () {
    this.readed.emit('Message has been readed')
  }

  ngOnInit(): void {
  }

}

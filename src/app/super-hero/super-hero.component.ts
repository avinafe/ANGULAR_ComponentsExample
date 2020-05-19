import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Superhero } from './super-hero.model';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  @Input() superheros: Superhero;
  @Output() call = new EventEmitter<String>();
  firstTime: boolean;
  message: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.superheros);
    this.firstTime = true;
    console.log(this.firstTime)
  }

  callHero() {
  
    
    console.log(this.firstTime)
    this.firstTime ? this.message = `Calling` : this.message = 'A superhero has been called already'
    console.log(this.message);
    
    this.call.emit(this.message)
    this.firstTime = false;
    console.log(this.firstTime)

  }


}

import { Component } from '@angular/core';
import { SaludaAComponent } from './saluda-a/saluda-a.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  famous = 'Rafa Nadal';
  changingName = 'ben Alpert'
  superheros = [
    { name: "batman",
      alterEgo: "bruce wayne",
      superpowers: ["genius intellect", "vast wealth", "indomitable will"]
    },
    { name: "sprocketman",
      alterEgo: "",
      superpowers: ["throws sprockets"]
    },
    { name: "wonder woman",
      alterEgo: "Princess Diana of Themyscira",
      superpowers: ["superhuman strength", "fly", "uses boomerang tiara"]
    },
    { name: "northstar",
      alterEgo: "Jean-Paul Beaubier",
      superpowers: ["superhuman speed", "fly", "project photonic blasts"]
    },
    { name: "superlopez",
      alterEgo: "Juan López Fernández",
      superpowers: ["superhuman strength", "flight", "X-ray vision"]
    }
  ];
  
  constructor() {
    setTimeout(() => this.changingName = 'sophie albert', 2000)
  }

  doSomething(message) {
    alert(message)
  }

  alertThis(message) {
    alert(message)
  }
}

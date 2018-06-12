import Hero from './Hero';
import BaseHero from './BaseHero';

export default class DCHero extends Hero {

  constructor(name: string, motivation: number = 45) {
    super(name, motivation);
  }

  punch(enemy: Hero) {
    if (this.getMotivationLevel() >= 1 && !(enemy instanceof DCHero)) {
      enemy.bePunched(this.getMotivationLevel() / 1.5);
    }
  }
}


import Hero from './Hero';

export default class MarvelHero extends Hero {

  constructor(name: string, motivation: number = 40) {
    super(name, motivation);
  }

  punch(enemy: Hero) {
    if (this.getMotivationLevel() >= 1 && !(enemy instanceof MarvelHero)) {
      enemy.bePunched(this.getMotivationLevel() / 1.5);
    }
  }
}
import BaseHero from './BaseHero';
import Punchable from './Punchable';

export default class Hero extends BaseHero implements Punchable {
  private motivation: number;

  constructor(name: string, motivation: number) {
    super(name);
    this.motivation = motivation;
  }

  getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0;
    } else if (this.motivation < 40) {
      return 1;
    } else {
      return 2;
    }
  }

  punch(enemy: Hero) {
    if (this.getMotivationLevel() >= 1) {
      enemy.bePunched(this.getMotivationLevel() / 1.5);
    }
  }

  bePunched(damage: number) {
    this.motivation = this.motivation - (damage / this.motivation);
  }

  toString() {
    if (this.getMotivationLevel() === 0) {
      return `${this.getName()} is not motivated anymore.`
    } else if (this.getMotivationLevel() === 1) {
      return `${this.getName()} is motivated.`
    } else if (this.getMotivationLevel() === 2) {
      return `${this.getName()} is well motivated.`
    }
  }
}

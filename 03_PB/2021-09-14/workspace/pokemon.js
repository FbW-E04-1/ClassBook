class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(attackSkill) {
    this.skills.push(attackSkill);
  }

  // this method could take a skill name instead of the index
  attack(skillIndex, opponent) {
    console.log("skill", this.skills[skillIndex]);
    console.log("attack name", this.skills[skillIndex].name);
    console.log("magic cost", this.skills[skillIndex].magicCost);
    console.log("damage", this.skills[skillIndex].damage);

    let attack = this.skills[skillIndex];
    console.log(opponent);
    // we check that the attacking pokemon has enough magic to launch the attack
    if (this.magic >= attack.magicCost) {
      this.magic -= attack.magicCost;
      opponent.health -= attack.damage;
        console.log(`${this.name} attacked ${opponent.name} with ${attack.name}.
            ${opponent.name} took ${attack.damage} damage and its health is now: ${opponent.health}
        `);
        if (opponent.health <= 0) {
            console.log('opponent is dead');
        }
    } else {
        console.log(`${this.name} doens't have enough magic to perform the attack.`)
    }
  }
  getMagic() {
      this.magic += 20;
  }
  showStatus() {
    console.log(`${this.name} status:
        Magic: ${this.magic}
        Health: ${this.health}
        Skills: ${this.skills.reduce(
          (acc, skill) => acc + skill.name + ", ",
          ""
        )}
      `);
  }
}

class AttackSkill {
  constructor(name, damage, magicCost) {
    this.name = name;
    this.damage = damage;
    this.magicCost = magicCost;
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let fireBall = new AttackSkill("fire ball", 40, 25);
let punch = new AttackSkill("punch", 20, 10);

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(fireBall);
pikachu.learnAttackSkill(punch);

bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(punch);

pikachu.showStatus();
bulbasaur.showStatus();

pikachu.attack(0, bulbasaur);

// pikachu.attack("lightning", bulbasaur);
pikachu.showStatus();
bulbasaur.showStatus();


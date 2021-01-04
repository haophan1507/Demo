function Pet(name) {
  this.name = name;
  this.die = true;
}

Pet.prototype.die = false;

module.exports = Pet;

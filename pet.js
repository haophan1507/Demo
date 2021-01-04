function Pet(name) {
  this.name = name;
  this.die = false;
}

Pet.prototype.die = true;

module.exports = Pet;

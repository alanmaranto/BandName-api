const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [
      new Band("Keane"),
      new Band("Maroon 5"),
      new Band("Blink 182"),
      new Band("The Rasmus"),
    ];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  deleteBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands = this.bands.map((band, index) => {
      if (band.id === id) {
        band.votes += 1;
      }
      return band;
    });
  }

  changeName(id, newName) {
    this.bands = this.bands.map((band, index) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}

module.exports = BandList;

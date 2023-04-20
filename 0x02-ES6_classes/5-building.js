/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}

/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

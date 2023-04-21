import Car from './10-car';

/* eslint-disable no-underscore-dangle */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  set range(value) {
    this._range = value;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return super.cloneCar();
  }
}

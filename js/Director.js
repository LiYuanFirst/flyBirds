import {DataStore} from "./base/DataStore.js"
export class Director {
  constructor(){
    this.dataStore = DataStore.getInstance()
  }
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance;
  }
  run() {
    const background = this.dataStore.get('background');
    background.draw();
  }
}
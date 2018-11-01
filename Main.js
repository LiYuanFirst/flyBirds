import {ResourceLoader} from "./js/base/ResourceLoader.js"
import {Director} from "./js/Director.js"
import {BackGround} from "./js/runtime/BackGround.js"
import { DataStore } from "./js/base/DataStore.js"
import {Land} from "./js/runtime/Land.js"
export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    // context.fillStyle="red";
    // context.fillRect(0,0,100,100);
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
    console.log(this.canvas.width)
   
  }
  onResourceFirstLoaded(map) {
    console.log(map)
    this.dataStore.ctx = this.ctx;
    this.dataStore.width = this.canvas.width;
    this.dataStore.height = this.canvas.height;
    this.dataStore.res = map;
    this.init();
    
  }
  init() {
    this.dataStore
      .put('background', BackGround)
      .put('land',Land);
    Director.getInstance().run()
  }
}
import {ResourceLoader} from "./js/base/ResourceLoader.js"
import {Director} from "./js/Director.js"
export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    // context.fillStyle="red";
    // context.fillRect(0,0,100,100);
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
    console.log(window.innnerWidth)
    let image = wx.createImage();
    image.src = 'res/background.png';
    image.onload = ()=>{
      this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height
      )
    }
  }
  onResourceFirstLoaded(map) {
    console.log(map)
  }
}
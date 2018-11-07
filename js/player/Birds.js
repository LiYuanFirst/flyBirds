import { Sprite } from '../base/Sprite.js'
export class Birds extends Sprite{
  constructor() {
    const image = Sprite.getImage('birds');
    super(image,0,0,image.width,image.height,0,0,image.width,image.height);
    //三个状态小鸟的起始绘图位置
    this.clippingX = [9,61,113];
    this.clippingY = [10,10,10];
    this.clippingWidth = [34, 34, 34];
    this.clippingHeight = [24,24,24];
    this.birdX = this.dataStore.width / 4;
    this.birdY = this.dataStore.height / 2;
    this.x = [this.birdX, this.birdX, this.birdX];
    this.y = [this.birdY, this.birdY, this.birdY]
    const birdWidth = 34;
    const birdHeight = 24;
    this.birdsX = [this.birdX, this.birdX, this.birdX];
    this.birdsY = [this.birdY, this.birdY, this.birdY];
    this.birdsWidth = [birdWidth, birdWidth, birdWidth];
    this.birdsHeight = [birdHeight, birdHeight, birdHeight];
    this.index = 0;
    this.count = 0;
    this.time = 0;
  }
  draw() {
    const speed = 0.1;
    this.count = this.count + speed;
    if(this.count>=2){
      this.count = 0;
    }
    //减速器
    this.index = Math.floor(this.count);

    //重力加速度
    const g = 0.98/3;
    //小鸟初始向上速度
    const birdV = 6;
    //小鸟位移量
    const offsetY = (g * this.time * this.time) / 2 - birdV*this.time;
    for(let i = 0;i<=2;i++){
      this.birdsY[i] = this.y[i] + offsetY
    }
    this.time++;
    super.draw(
      this.img,
      this.clippingX[this.index], this.clippingY[this.index],
      this.clippingWidth[this.index], this.clippingHeight[this.index],
      this.birdsX[this.index], this.birdsY[this.index],
      this.birdsWidth[this.index], this.birdsHeight[this.index]
    )
  }
}
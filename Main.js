import {ResourceLoader} from "./js/base/ResourceLoader.js"
import {Director} from "./js/Director.js"
import {BackGround} from "./js/runtime/BackGround.js"
import { DataStore } from "./js/base/DataStore.js"
import {Land} from "./js/runtime/Land.js"
import {Birds} from "./js/player/Birds.js"
import {StartButton} from './js/player/StartButton.js'
import {Score} from './js/player/Score.js'
export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    // context.fillStyle="red";
    // context.fillRect(0,0,100,100);
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }
  //创建背景音乐
  createBGM(){
    var bgm = wx.createInnerAudioContext();
    bgm.autoplay = true;
    bgm.loop = true;
    bgm.src = 'audio/bgm.mp3';
  }
  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.width = this.canvas.width;
    this.dataStore.height = this.canvas.height;
    this.dataStore.res = map;
    this.init();
    
  }
  init() {
    this.director.isGameOver = false;
    this.createBGM();
    this.dataStore
      .put('pencils',[])
      .put('background', BackGround)
      .put('land',Land)
      .put('birds', Birds)
      .put('score', Score)
      .put('startButton', StartButton);
    this.registerEvent();
    this.director.createPencil();
    this.director.run()
  }
  registerEvent() {
    wx.onTouchStart((e)=>{
      if(this.director.isGameOver){
        this.init()
      }else{
        this.director.birdsEvent()
      }
    })
  }
}
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'

export class Main{
    constructor(container){
        this._container=container;
    }
    start(){
        const scene=new Scene();
        const width=window.innerWidth;
        const height=window.innerHeight-10;
        const camera=new PerspectiveCamera(75,width/height,0.1,1000);
        const renderer=new WebGLRenderer({canvas:this._container});
        renderer.setSize(width,height);
        renderer.setClearColor(0xffffff);
        renderer.render(scene,camera)
    }
}
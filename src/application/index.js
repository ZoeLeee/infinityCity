import {
  AxesHelper,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  PlaneBufferGeometry,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export class Main {
  constructor(container) {
    this._container = container;
  }
  start() {
    const scene = new Scene();
    const width = window.innerWidth;
    const height = window.innerHeight - 10;
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    camera.position.z = 10;

    camera.lookAt(new Vector3());

    const renderer = new WebGLRenderer({ canvas: this._container });
    renderer.setSize(width, height);
    renderer.setClearColor(0xcccccc);

    this._scene = scene;
    console.log(scene);
    this._camera = camera;
    this._renderer = renderer;


    window.addEventListener("resize",e=>{
        const width = window.innerWidth;
        const height = window.innerHeight - 10;
        renderer.setSize(width, height);
        camera.aspect=width/height;
        camera.updateProjectionMatrix();
    })

    this.init();

    this.render();
  }
  init() {
    const axes = new AxesHelper(100);
    this._scene.add(axes);

    const planeGeo = new PlaneBufferGeometry(5, 5);
    const plane = new Mesh(planeGeo, new MeshNormalMaterial());
    this._scene.add(plane);

    const control=new OrbitControls(this._camera,this._container)
    this._control=control;
    control.update();
  }
  render=()=>{
      requestAnimationFrame(this.render);
      this._control.update();
      this._renderer.render(this._scene, this._camera);
  }
}

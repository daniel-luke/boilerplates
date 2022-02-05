import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.001,
  10000
);

const renderer = new WebGLRenderer();

function refreshWindowSize(
  cam: PerspectiveCamera,
  render: WebGLRenderer
): void {
  cam.aspect = window.innerWidth / window.innerHeight;
  cam.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
}

refreshWindowSize(camera, renderer);
window.addEventListener("resize", (e) => refreshWindowSize(camera, renderer));

document.body.appendChild(renderer.domElement);

const geo = new BoxGeometry();
const mat = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geo, mat);
scene.add(cube);
camera.position.z = 5;

function animate(): void {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

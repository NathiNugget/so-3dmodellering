//Dette program laver en figur af en serie række funktioner.

// De tre funktioner som vi bruger til at finde rationen
function interval_1(x) {
  return Math.log(x) + 3;
}

function interval_2(x) {
  return Math.tanh(x - 1) + 3;
}

function interval_3(x) {
  return Math.sin(x - 5) + 3;
}

//sætter cameraet go renderen op
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);

renderer.setSize(800, 800);

//ændrer kamerets position
camera.position.z = 15;
camera.position.y = 10;
camera.lookAt(0, 3, 0);

// Lavet lyset
var light = new THREE.AmbientLight(0x404040); // hvidt lys
scene.add(light);
var light2 = new THREE.DirectionalLight(0x404040, 0.5);
scene.add(light2);

//laver gulvets form
var geometry2 = new THREE.BoxGeometry(20, 0.1, 20);
//laver gulvets farve
var material2 = new THREE.MeshBasicMaterial({
  color: 0x474B52
});
// sætter gulvets farve og form sammen
var floor = new THREE.Mesh(geometry2, material2);
// tilføjer gulvet til
scene.add(floor);


// Det første for loop som laver det første interval
for (var i = 0.1; i < 1; i += 0.05) {
  var geometry = new THREE.CylinderBufferGeometry(interval_1(i), interval_1(i), 0.1, 32);
  var material = new THREE.MeshLambertMaterial({
    color: 0x42f453
  });
  var cylinder = new THREE.Mesh(geometry, material);

  cylinder.position.y = i;
  scene.add(cylinder);
}

// Det første for loop som laver det anden interval
for (var i = 1; i < 6.5; i += 0.05) {
  var geometry = new THREE.CylinderBufferGeometry(interval_2(i), interval_2(i), 0.1, 32);
  var material = new THREE.MeshLambertMaterial({
    color: 0x42f453
  });
  var cylinder = new THREE.Mesh(geometry, material);

  cylinder.position.y = i;
  scene.add(cylinder);
}

// Det første for loop som laver det threjde interval
for (var i = 6.5; i < 10; i += 0.05) {
  var geometry = new THREE.CylinderBufferGeometry(interval_3(i), interval_3(i), 0.1, 32);
  var material = new THREE.MeshLambertMaterial({
    color: 0x42f453
  });
  var cylinder = new THREE.Mesh(geometry, material);

  cylinder.position.y = i;
  scene.add(cylinder);
}

renderer.render(scene, camera);

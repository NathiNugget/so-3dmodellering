/*
Dette program vil lave en masse cylinder oven på hinandem således at de kommer til at forme en vase. De vil gøre
ved at bruge den naturlige logaritme til at finde radiusen af hver cylinder, og ved at bruge et for-loop til at stable dem på hiannden.
Dette program er en spike solution som løser med hvordan kærneproblemet der omhandler
*/

  //sætter scenen og kameret op
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(700, 700);
  document.body.appendChild(renderer.domElement);

  //ændre kamerets position såledest at vasen kan ses.
  camera.position.z = 20;
  camera.position.y = 5;

  var light = new THREE.AmbientLight(0x404040); // hvidt lys
  scene.add(light);
  var light2 = new THREE.DirectionalLight(0x404040, 0.5);
  scene.add(light2);

  var rumfang = 0;
  function find_rumfang(r){
    return Math.PI*(r**2)*0.1;
  }
  /*
  Dette er for-loopet som stabler en cylinderne ovenpå hinanden, cylinderne har f(i) = log(i) som radius
  og 0.1 som højde og position (0,i,0).
  */

  function myFunction(x){
    return Math.log(x);
  }


  var interval = 10;

  renderer.render(scene, camera);
  console.log(rumfang);

  function submit_interval(){
    //Laver et While-loop som sletter alle objekter i en scene.
    while(scene.children.length > 0){
    scene.remove(scene.children[0]);
    }
    interval = document.getElementById('interval').value;

    for (var i = 1; i <= interval; i +=0.1) {
      var geometry = new THREE.CylinderBufferGeometry(myFunction(i), myFunction(i), 0.1, 32);
      var material = new THREE.MeshLambertMaterial({color: 0x42f453});
      var cylinder = new THREE.Mesh(geometry, material);

      cylinder.position.y = i;
      scene.add(cylinder);
      rumfang = rumfang + find_rumfang(i);
    }
    var light = new THREE.AmbientLight(0x404040); // hvidt lys
    scene.add(light);
    var light2 = new THREE.DirectionalLight(0x404040, 0.5);
    scene.add(light2);
    // renderere scenen
    renderer.render(scene, camera);
  }

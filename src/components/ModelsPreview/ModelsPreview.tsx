import React, { useEffect } from 'react';
import styles from './ModelsPreview.module.scss';

import logo from './logo.svg';

import * as THREE from 'three';

const ModelsPreview = () => {

  useEffect(() => {

    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementsByClassName('container-three-js')[0].appendChild( renderer.domElement );


    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );

    var geo = new THREE.EdgesGeometry( geometry);

    // wireframe
    var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
    var wireframe = new THREE.LineSegments( geo, mat );
    wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
    cube.add( wireframe );

    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
    
  });
  
  return (
    <div className={`${styles['models-preview']} container-three-js`} data-testid="ModelsPreview">
    </div>
  );
  
  };

export default ModelsPreview;

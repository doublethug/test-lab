import React, { FunctionComponent, useState, useEffect } from 'react';
import styles from './FourDPlayer.module.scss';

import * as THREE from 'three';
/* istanbul ignore next */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FourDPlayer:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {

  const [clicks, setClicks] = useState(initial);

  useEffect(() => {

    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    // scene.background = new THREE.Color( 0xff0000 );
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
  
    // CAMERA SETTINGS
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // const helper = new THREE.CameraHelper( camera );
    // scene.add( helper );
  
  
    // RENDERER SETTINGS
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0x333000, 0.5 );
    
    
  
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

    const controls = new OrbitControls( camera, renderer.domElement );

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set( 0, 10, 10 );
    controls.update();
    
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===

    // LOAD MODEL
    const loader = new FBXLoader();
    loader.load( 'Samba Dancing.fbx', function ( object ) {

        scene.add( object );
    
    }, undefined, function ( e ) {
    
      console.error( e );
    
    } );

    // loader.load( './Samba Dancing.fbx', function ( object ) {

    //   let mixer = new THREE.AnimationMixer( object );

    //   const action = mixer.clipAction( object.animations[ 0 ] );
    //   action.play();

    //   object.traverse( function ( child ) {

    //     if ( child ) { //child.isMesh

    //       child.castShadow = true;
    //       child.receiveShadow = true;

    //     }

    //   } );

    //   scene.add( object );

    // } );
    
  });
  return <>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
  </>
}



export default FourDPlayer;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

class task2 extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.TorusGeometry(10, 3, 16, 50);
    var material = new THREE.MeshBasicMaterial({ color: 0xf00f0f });
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 50;
    const controls = new OrbitControls(camera, renderer.domElement);

    var animate = function () {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return (
      <div ref={(ref) => (this.mount = ref)}>
        <h2 style={{ textAlign: "center" }}>Try grabbing it</h2>
      </div>
    );
  }
}

export default task2;

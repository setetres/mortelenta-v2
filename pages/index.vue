<template>
  <div id="frame" class="w-full h-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none z-20">
    <div id="scythe" />
  </div>
</template>
<script>
  import * as THREE from 'three'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

  export default {
    mounted() {
      let camera, scene, renderer, object

      const frame = document.querySelector('#frame')
      const container = document.querySelector('#scythe')

      let mouseX = 0
      let mouseY = 0

      let windowHalfX = frame.clientWidth / 2
      let windowHalfY = frame.clientHeight / 2

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera(
          45,
          frame.clientWidth / frame.clientHeight,
          1,
          1000
        )
        camera.position.z = 300

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0x000000, 1)

        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xcccccc, 1)

        camera.add(pointLight)
        scene.add(camera)

        function loadModel() {
          object.traverse(function (child) {
            if (child.isMesh) child.material.map = texture
          })

          object.position.y = 0
          object.position.x = 0
          scene.add(object)
        }

        const manager = new THREE.LoadingManager(loadModel)

        const random = Math.floor(Math.random() * 1) + 0
        const bigSize = ['/texture.png']

        const textureLoader = new THREE.TextureLoader(manager)
        const texture = textureLoader.load(bigSize[random])

        const loader = new OBJLoader(manager)

        loader.load('/scythe.obj', function (obj) {
          object = obj
        })

        renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(frame.clientWidth, frame.clientHeight)

        container.appendChild(renderer.domElement)

        document.addEventListener('mousemove', onDocumentMouseMove)
        window.addEventListener('resize', onWindowResize)
      }

      function onWindowResize() {
        windowHalfX = frame.clientWidth / 2
        windowHalfY = frame.clientHeight / 2

        camera.aspect = frame.clientWidth / frame.clientHeight
        camera.updateProjectionMatrix()

        renderer.setSize(frame.clientWidth, frame.clientHeight)
      }

      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 10
        mouseY = (event.clientY - windowHalfY) / 10
      }

      function animate() {
        requestAnimationFrame(animate)

        render()
      }

      function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
    }
  }
</script>

'use client';

import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';

const asciiShader = {
  uniforms: {
    uTexture: { value: null },
    uResolution: { value: new THREE.Vector2() },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec2 uResolution;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      vec3 texColor = texture2D(uTexture, vUv).rgb;
      float gray = luminance(texColor);

      // ASCII-like brightness mapping
      float threshold = step(0.5, gray);
      gl_FragColor = vec4(vec3(threshold), 1.0);
    }
  `
};

export default function FlowerAscii() {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '/flower.jpeg');

  const material = new ShaderMaterial({
    ...asciiShader,
    uniforms: {
      ...asciiShader.uniforms,
      uTexture: { value: texture },
    }
  });

  useFrame(({ size }) => {
    if (material.uniforms.uResolution) {
      material.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[3.5, 3.5]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

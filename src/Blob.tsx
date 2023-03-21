import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import { css } from 'vite-plugin-inline-css-modules'

export default function Blob() {
  return (
    <Canvas className={styles.root}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 3]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls />
      <Stats />
    </Canvas>
  )
}

const styles = css`
  .root {
    background-color: #a5ffa5;
    @apply rounded-md;
  }
`

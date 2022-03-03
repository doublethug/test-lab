import React, { FC } from 'react';

import { Canvas, useFrame } from '@react-three/fiber'

import styles from './ThreePlayer.module.scss';

import PageHeader from '../PageHeader/PageHeader';

interface ThreePlayerProps {}

const ThreePlayer: FC<ThreePlayerProps> = () => (
  <div className={styles.ThreePlayer} data-testid="ThreePlayer">
    <PageHeader text="Fiber Three Player" />
    <div  className={styles.CanvasWrapper}>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  </div>
);

export default ThreePlayer;

import React, { useEffect } from 'react';
import styles from './ModelsPreview.module.scss';

import logo from './logo.svg';

import FourDPlayer from '../FourDPlayer/FourDPlayer'

const ModelsPreview = () => {
  
  return (
    <div className={`${styles['models-preview']} container-three-js`} data-testid="ModelsPreview">
      <FourDPlayer/>
    </div>
  );
  
  };

export default ModelsPreview;

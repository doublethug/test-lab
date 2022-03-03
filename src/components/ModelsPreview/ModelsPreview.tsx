import React, { useEffect } from 'react';
import styles from './ModelsPreview.module.scss';

import logo from './logo.svg';

import FourDPlayer from '../FourDPlayer/FourDPlayer';
import PageHeader from '../PageHeader/PageHeader';

const ModelsPreview = () => {

  return (
    <div className={`${styles['models-preview']} container-three-js`} data-testid="ModelsPreview">
      <PageHeader text="Preview" />
      <FourDPlayer/>
    </div>
  );
  
  };

export default ModelsPreview;

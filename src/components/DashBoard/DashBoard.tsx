import React from 'react';
import styles from './DashBoard.module.scss';

import PageHeader from '../PageHeader/PageHeader';

const DashBoard = () => (
  <div className={styles.DashBoard} data-testid="DashBoard">
    <PageHeader text="Dashboard" />
    <div className={styles.DashBoardText}>
      <p>Count of comopnetns: 5</p>
    </div>
    
  </div>
);

export default DashBoard;

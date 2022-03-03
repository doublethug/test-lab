import React, { FC } from 'react';
import {
  Link
} from "react-router-dom";
import styles from './SideMenu.module.scss';

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => (
  <div className={styles.SideMenu} data-testid="SideMenu">
    <ul className={styles.mainSideMenu}>
      <li>
        <Link to="/">Dash Board</Link>
      </li>
      <li>
        <Link to="/math-lab">Math Lab</Link>
      </li>
      <li>
        <Link to="/model-preview">Models Preview</Link>
      </li>
      <li>
        <Link to="/height-maps">Height Maps</Link>
      </li>
      <li>
        <Link to="/three-player">Player with Fiber</Link>
      </li>
    </ul>
  </div>
);

export default SideMenu;

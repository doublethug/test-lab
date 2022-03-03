import { PinDropSharp } from '@mui/icons-material';
import React, { FC } from 'react';
import styles from './PageHeader.module.scss';

import Typography from '@mui/material/Typography';

interface PageHeaderProps {
  text?: string,
}

const PageHeader: FC<PageHeaderProps> = (props) => (
  <div className={styles.PageHeader} data-testid="PageHeader">
    <Typography variant="h4" gutterBottom component="div">
      { props.text }
    </Typography>
  </div>
);

export default PageHeader;

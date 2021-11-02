/* Libraries */
import React from 'react';

/* Styles */
import './Footer.css';
import { Grid, Typography } from '@mui/material';

/* Components */

/**
 *
 */
function Footer() {
  return (
    <footer>
      <Grid container>
        <Grid item xs={4}>
          &copy; ValourCode 2021
        </Grid>
        <Grid item xs={2}>
          definitions
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;

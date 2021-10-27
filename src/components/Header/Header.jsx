/* Libraries */
import React from 'react';

/* Styles */
import './Header.css';
import { Grid, Typography } from '@mui/material';

/* Components */

/**
 *
 */
function Header() {
  return (
    <header>
      <Grid container>
        <Grid item xs={12} className="title">
          <Typography>
            <span className="letter-ff0000">C</span>
            <span className="letter-ffa500">O</span>
            <span className="letter-ffff00">L</span>
            <span className="letter-008000">O</span>
            <span className="letter-0000ff">R</span>
            <span> Mixer</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="mixing-options">
        <Grid item xs={6}>
          <Typography>Pigment Mixing</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Light Mixing</Typography>
        </Grid>
      </Grid>
      <Grid container className="navigation">
        <Grid item xs={2}>
          2 Colors
        </Grid>
        <Grid item xs={2}>
          3 Colors
        </Grid>
        <Grid item xs={2}>
          4 Colors
        </Grid>
        <Grid item xs={2}>
          2 Colors
        </Grid>
        <Grid item xs={2}>
          3 Colors
        </Grid>
        <Grid item xs={2}>
          4 Colors
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
